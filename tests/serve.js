import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const assets = new Set(["index.html", "glossary.html", "styles.css", "app.js", "glossary-page.js", "glossary.js", "data.js", "extras.js", "model.js", "shells.js", "storage.js", "tarstone-art.js", "loadout.html", "loadout.js", "loadout.css", "tarstone-compatibility.json"]);
const types = { html: "text/html", css: "text/css", js: "text/javascript", json: "application/json", svg: "image/svg+xml", jpg: "image/jpeg", png: "image/png", webp: "image/webp" };

createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const filename = pathname === "/shell-mate/" ? "index.html" : pathname.replace(/^\/shell-mate\//, "");
  const imagePath = /^assets\/(?:bosses\/[a-z0-9-]+\.jpg|categories\/[a-z0-9-]+\.(?:png|svg)|shells\/[a-z0-9-]+\.(?:png|webp)|tarstones\/[a-z0-9-]+\.(?:png|webp)|weapons\/[a-z0-9-]+\.webp)$/.test(filename);
  if (!pathname.startsWith("/shell-mate/") || (!assets.has(filename) && !imagePath)) {
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
