import colors from "colors/safe";
import * as fs from "fs";
import * as path from "path";

const originalLog = console.log;

console.log = function (message: string) {
  originalLog(`
>> ${colors.yellow(message)}
`);
};

function loadAllFiles(
  directory: string
): Promise<{ [fileIndex: string]: string }> {
  function getFileMap(files: string[]) {
    const regex = /^(\d+)-.*\.ts$/i;

    return files.reduce((map, f) => {
      const result = regex.exec(f);

      if (result) {
        const fileName = result[0];
        const fileIndex = result[1];
        return {
          ...map,
          [fileIndex]: fileName,
        };
      }

      return map;
    }, {});
  }

  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const filesMap = getFileMap(files);
        resolve(filesMap);
      }
    });
  });
}

async function loadFile(directory: string, fileIndex: string) {
  const targetDirectory = path.join(__dirname, directory);

  const fileMap = await loadAllFiles(targetDirectory);
  const fileName = fileMap[fileIndex] || fileIndex;

  originalLog(colors.cyan(fileName), "\n");

  require(path.join(targetDirectory, fileName));
}

const fileToInclude = process.argv[2];
loadFile("./presentation", fileToInclude);
