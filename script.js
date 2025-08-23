import fs from "fs/promises";

try {
const cd = process.cwd();
console.log(`Current working directory: ${cd}`);

const directory = await fs.readdir(cd, { withFileTypes: true });
console.log("Folders in the current directory:", directory);

for (const file of directory) {
  const isfolder = file?.isDirectory();
  const renamaeablefolderRegex = /^TypeScript Hindi Tutorial #\d+ .+/;
  if (isfolder && renamaeablefolderRegex.test(file.name)) {
    console.log(`folder: ${file.name}`);
    const folderNewName = file.name.replace(
      /TypeScript Hindi Tutorial #(\d+) (.+)/,
      "TypeScript Tutorial #$1 - $2"
    );
    console.log(`Renaming to: ${folderNewName}`);
    fs.rename(`${cd}/${file.name}`, `${cd}/${folderNewName}`);
    console.log(`Renamed ${file.name} to ${folderNewName}`);
  } else {
    console.log(`Skipping: ${file.name}`);
  }
}

} catch (error) {
    console.error("Error:", error);   
}