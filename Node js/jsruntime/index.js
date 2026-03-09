import fs from 'fs'

function main(filename) {
  fs.readFile(filename, 'utf-8', function (err, data) {
    if (err) throw err;
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === ' ')
        count++;
    }
    console.log('count is', count);
  });
}

main(process.argv[2]);