const fs = require('fs');

const main = (type, semverType) => {
  if (type === 'core') {
    bumpCore(semverType);
  } else if (type === 'angular') {
    bumpAngular(semverType);
  } else if (type === 'react') {
    bumpReact(semverType);
  } else {
    console.log('No sync operation execution!')
  }
}

const bumpCore = (semverType) => {
  const corePkgJsonPath = './package.json';
  const core = JSON.parse(await fs.readFileSync(corePkgJsonPath));
  core.version = getSemver(core.version, semverType);

  fs.writeFileSync(corePkgJsonPath, JSON.stringify(core, undefined, 2));
}

const bumpAngular = (semverType) => {
  const angularPkgJsonPath = './exports/angular/package.json';
  const angular = JSON.parse(await fs.readFileSync(angularPkgJsonPath));
  angular.version = getSemver(angular.version, semverType);

  fs.writeFileSync(angularPkgJsonPath, JSON.stringify(angular, undefined, 2));
}

const bumpReact = (semverType) => {
  const reactPkgJsonPath = './exports/react/package.json';
  const react = JSON.parse(await fs.readFileSync(reactPkgJsonPath));
  react.version = getSemver(react.version, semverType);

  fs.writeFileSync(reactPkgJsonPath, JSON.stringify(react, undefined, 2));
}

const getSemver = (currentVersion, semverType) => {
  const v = currentVersion.split('.');
  let [major, minor, patch] = v;

  switch (semverType) {
    case 'major':
      major = (parseInt(major, 10) + 1).toString();
      break;
    case 'minor':
      minor = (parseInt(minor, 10) + 1).toString();
      break;
    case 'patch':
      patch = (parseInt(patch, 10) + 1).toString();
      break;
    default:
      console.log(1`Unrecognized semver type: ${semverType}`);
      break;
  }

  return `${major}.${minor}.${patch}`
}

main(process.argv[2], process.argv[3]);
