import fs from "fs/promises";

try {
const cd = process.cwd();
console.log(`Current working directory: ${cd}`);

const directory = await fs.readdir(cd, { withFileTypes: true });
console.log("Folders in the current directory:", directory);

for (const file of directory) {
  const isfolder = file?.isDirectory();
  if (isfolder) {
    console.log(`folder: ${file.name}`);
    const folderNewName = file.name.replace(
      "TypeScript Hindi Tutorial",
      "TypeScript Tutorial"
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