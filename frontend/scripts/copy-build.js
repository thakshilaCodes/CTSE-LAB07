const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const pub = path.join(root, "public");
const out = path.join(root, "build");

fs.mkdirSync(out, { recursive: true });
for (const name of fs.readdirSync(pub)) {
  fs.copyFileSync(path.join(pub, name), path.join(out, name));
}
console.log("Build output written to build/");
