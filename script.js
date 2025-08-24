import fs from "fs/promises";

(
  async function renameTutorialFolders(test_value, replace_value) {
  try {
  const cd = process.cwd();
  console.log(`Current working directory: ${cd}`);
  
  const directory = await fs.readdir(cd, { withFileTypes: true });
  console.log("Folders in the current directory:", directory);
  
  for (const file of directory) {
    const isfolder = file?.isDirectory();
    const renamaeableFolderRegex = test_value;
    if (isfolder && renamaeableFolderRegex.test(file.name)) {
      console.log(`folder: ${file.name}`);
      const folderNewName = file.name.replace(
        test_value,
        replace_value
      );
      console.log(`Renaming to: ${folderNewName}`);
      fs.rename(`${cd}/${file.name}`, `${cd}/${folderNewName}`);
      console.log(`Renamed '${file.name}' to '${folderNewName}'`);
    } else {
      console.log(`Skipping: ${file.name}`);
    }
  }
  
  } catch (error) {
      console.error("Error:", error);   
  }
}
)(/TypeScript Hindi Tutorial #(\d+) (.+)/, "TypeScript Tutorial $1 - $2")