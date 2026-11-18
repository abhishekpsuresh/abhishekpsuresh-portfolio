// Fails the build if an in-page link (#section) points to an id that does not exist.
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
// Only static links: skip ones that are assembled by JavaScript.
const links = [...html.matchAll(/href="#([A-Za-z][\w-]*)"/g)].map((m) => m[1]);
const missing = [...new Set(links)].filter((l) => !ids.has(l));
if (missing.length) {
  console.error("Broken in-page links:", missing.join(", "));
  process.exit(1);
}
console.log(`OK: ${new Set(links).size} in-page links all resolve.`);
