const fs = require('fs');

const main = (type) => {
  if (type === 'angular') {
    syncAngular();
  } else if (type === 'react') {
    syncReact();
  } else {
    console.log('No sync operation execution!')
  }
}

const syncAngular = () => {
  console.log('Start syncAngular');
  console.log('End syncAngular');
}

const syncReact = () => {
  console.log('Start syncReact');
  const pkgJsonPath = './exports/react/package.json';

  fs.readFile(pkgJsonPath, 'utf8', function (err, data) {
    if (err) throw err;

    data.

      fs.writeFile(pkgJsonPath, data, function (err) {
        if (err) throw err;
        console.log('complete');
      });
  });

  console.log('End syncReact');
}

main(process.argv[2]);
