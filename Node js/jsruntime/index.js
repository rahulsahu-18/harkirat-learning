import fs from "fs";

// function main(filename) {
//   fs.readFile(filename, 'utf-8', function (err, data) {
//     if (err) throw err;
//     let count = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] === ' ')
//         count++;
//     }
//     console.log('count is', count);
//   });
// }

// main(process.argv[2]);

import { program } from "commander";

program
  .command("countSpace")
  .description("count the space")
  .argument("<fileName>", "path to the file")
  .action((fileName) => {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) throw err;
      let count = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === " ") count++;
      }
      console.log("count is", count);
    });
  });

program
  .command("countLine")
  .description("count the line in file")
  .argument("<fileName>", "path to file")
  .action((fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) throw err;
      const lines = data.split("\n").length;
      console.log("line no", lines);
    });
  });
program.parse();
