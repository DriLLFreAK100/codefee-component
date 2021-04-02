const fs = require('fs');

const main = () => {
  const proxyFilePath = '../codefee-component-angular/projects/codefee-component-angular/src/lib/directives/proxies.ts';

  fs.readFile(proxyFilePath, 'utf-8', function (err, data) {
    if (err) throw err;

    var newValue = data.replace(new RegExp('@codefee-component/core/dist/custom-elements', 'g'), '@codefee-component/core/dist/types');

    fs.writeFile(proxyFilePath, newValue, 'utf-8', function (err, data) {
      if (err) throw err;
      console.log('Done Fix Angular Proxy!');
    })
  })
}

main();
