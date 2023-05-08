import app from "./src/app.js";
async function main() {
  await app.listen(app.get("port"));
  console.log("SERVER RUNNING ON PORT ", app.get("port"));
}
main();
