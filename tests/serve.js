import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const assets = new Set(["index.html", "styles.css", "app.js", "data.js", "model.js", "storage.js"]);
const types = { html: "text/html", css: "text/css", js: "text/javascript" };

createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const filename = pathname === "/shell-mate/" ? "index.html" : pathname.replace(/^\/shell-mate\//, "");
  if (!pathname.startsWith("/shell-mate/") || !assets.has(filename)) {
    response.writeHead(404).end();
    return;
  }
  try {
    const contents = await readFile(new URL("../" + filename, import.meta.url));
    response.writeHead(200, { "Content-Type": types[filename.split(".").at(-1)] }).end(contents);
  } catch {
    response.writeHead(500).end();
  }
}).listen(8765, "127.0.0.1");
