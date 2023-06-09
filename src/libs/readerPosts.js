import { writeFile, readdir, readFile } from "fs/promises";
import path from "path";
import MarkdownIt from "markdown-it";
import jsx from "markdown-it-jsx";
const md = new MarkdownIt().use(jsx);

const dir = `public/${process.env.FOLDER}/md_files`;

export async function readerArticles() {
  const md_files = await readdir(path.join(dir));
  const data = [];
  for await (const file of md_files) {
    const text = await readFile(
      path.join(dir, file),
      "utf-8"
    );
    const header = readHeader(text);
    data.push(header);
  }
  if (data.length === 0) {
    return false;
  }
  return data;
}

function readHeader(fileText) {
  const headers = /(?=-{3})([à-ü\w\s:"',{}/.-])*(?=-{3})/gm;
  let data;
  try {
    data = headers.exec(fileText.trim());
  } catch (e) {
    throw new Error("ivalid header or not fount");
  }
  const parse = data[0].trim();
  const dataFilter = parse.split("\n").filter(Boolean);
  const withoutR = dataFilter.map((e) => e.replace(/\r/g, ""));
  const abs = {};
  withoutR.forEach((line) => {
    const [key, value, more] = line.split(":");
    if (more) {
      abs[key] = value + ":" + more;
      return abs[key];
    }
    abs[key] = value;
    return abs[key];
  });
  return abs;
}

export async function readerContentPost(id) {
  if (!id.match(/^[0-9]+$/)) return await readByFilepath(id);
  return await readById(id);
}

async function readById(id) {
  const md_files = await readdir(path.join(dir));
  let filename = "";

  md_files.forEach((e) => {
    e.split("_")[0].includes(id) ? (filename = e) : null;
  });
  if (filename === "") return false;
  const content = await readFile(
    path.join(`${dir}/` + filename)
  );
  const text = await readFile(
    path.join(dir, filename),
    "utf-8"
  );
  const post = readHeader(text);

  try {
    const dataHTML = md.render(
      content.toString().replace(/-{3}([à-ü\w\s:"',{}/.-])*-{3}/gm, "")
    );
    return { post, dataHTML };
  } catch (err) {
    console.log(err);
    return "NOT_POST";
  }
}

async function readByFilepath(filepath) {
  const md_files = await readdir(path.join(dir));
  let filename = "";

  md_files.forEach((e) => {
    e.includes(filepath) ? (filename = e) : null;
  });
  if (filename === "") return false;
  const content = await readFile(
    path.join(`${dir}/` + filename)
  );
  const text = await readFile(
    path.join(dir, filename),
    "utf-8"
  );
  const post = readHeader(text);
  try {
    const dataHTML = md.render(
      content.toString().replace(/-{3}([à-ü\w\s:"',{}/.-])*-{3}/gm, "")
    );
    return { post, dataHTML };
  } catch (err) {
    console.log(err);
    return "NOT_POST";
  }
}
