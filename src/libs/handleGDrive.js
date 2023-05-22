import { google } from "googleapis";
import fs from "node:fs";
import path from "node:path";
import process from "process";

const path_gedrive = path.join(process.cwd(), "./public/gdrive");

function refreshFolders() {
  if (fs.existsSync(path_gedrive)) {
    fs.rmSync(path_gedrive, { recursive: true });
  }
  fs.mkdirSync(path_gedrive);
  fs.mkdirSync(path.join(path_gedrive, "md_files"));
  fs.mkdirSync(path.join(path_gedrive, "images"));
  fs.mkdirSync(path.join(path_gedrive, "images/webp"));
  fs.mkdirSync(path.join(path_gedrive, "images/gif"));
}

export async function authGDrive(res) {
  const SCOPES = [
    "https://www.googleapis.com/auth/drive",
    "https://www.googleapis.com/auth/drive.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/drive.file",
  ];

  const CREDENTIALS_PATH = path.join(process.cwd(), "./credentials.json");

  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: SCOPES,
  });

  refreshFolders();
  await listFiles(auth, res);
}

async function downloadFile(auth, res, filename, fileId, pathType) {
  let progress = 0;
  let dir = `./public/gdrive/${pathType}`;

  const dest = fs.createWriteStream(`./public/gdrive/${pathType}/${filename}`);

  await google
    .drive({ version: "v3", auth })
    .files.get({ fileId, alt: "media" }, { responseType: "stream" })
    .then((driveResponse) => {
      driveResponse.data
        .on("end", () => {
          console.log("\nDone downloading file.");
          const file = `${dir}/${filename}`;
          res.download(file, function (err) {
            if (err) {
              // Check if headers have been sent
              if (res.headersSent) {
                // You may want to log something here or do something else
              } else {
                return res.sendStatus(SOME_ERR); // 404, maybe 500 depending on err
              }
            }
            // Don't need res.end() here since already sent
          });
        })
        .on("error", (err) => {
          console.error("Error downloading file.");
        })
        .on("data", (d) => {
          progress += d.length;
          if (process.stdout.isTTY) {
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(`Downloaded ${progress} bytes`);
          }
        })
        .pipe(dest);
    })
    .catch((err) => console.log(err));
}

async function listFiles(auth, res) {
  const files = await google.drive({ version: "v3", auth }).files.list(
    {
      //pageSize: 20,
      fields: "nextPageToken, files(id, name)",
    },
    async (err, response) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = response.data.files;

      const mdFiles = await files.filter((file) => {
        return path.extname(file.name) === ".md";
      });

      const webpFiles = await files.filter((file) => {
        return path.extname(file.name) === ".webp";
      });

      const gifFiles = await files.filter((file) => {
        return path.extname(file.name) === ".gif";
      });

      mdFiles.forEach(async (file) => {
        await downloadFile(auth, res, file.name, file.id, "md_files");
      });

      webpFiles.forEach(async (file) => {
        await downloadFile(auth, res, file.name, file.id, "images/webp");
      });

      gifFiles.forEach(async (file) => {
        await downloadFile(auth, res, file.name, file.id, "images/gif");
      });
    }
  );
}
