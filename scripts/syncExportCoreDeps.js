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

const syncAngular = async () => {
  console.log('Start syncAngular');
  const corePkgJsonPath = './package.json';
  const angularPkgJsonPath = './exports/angular/package.json';

  const core = JSON.parse(await fs.readFileSync(corePkgJsonPath));
  const angular = JSON.parse(await fs.readFileSync(angularPkgJsonPath));
  angular.dependencies['@codefee-component/core'] = core.version;

  fs.writeFileSync(angularPkgJsonPath, JSON.stringify(angular, undefined, 2));

  console.log('End syncAngular');
}

const syncReact = async () => {
  console.log('Start syncReact');
  const corePkgJsonPath = './package.json';
  const reactPkgJsonPath = './exports/react/package.json';

  const core = JSON.parse(await fs.readFileSync(corePkgJsonPath));
  const react = JSON.parse(await fs.readFileSync(reactPkgJsonPath));
  react.peerDependencies['@codefee-component/core'] = `>=${core.version}`;

  fs.writeFileSync(reactPkgJsonPath, JSON.stringify(react, undefined, 2));

  console.log('End syncReact');
}

main(process.argv[2]);
