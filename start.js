const exec = require('child_process').exec

console.log('start for prod')

const build = exec('npm run start', {stdio: 'inherit', windowsHide: true});

build.stdout && build.stdout.on('data', console.log);
build.stderr && build.stderr.on('data', console.log);

build.on('close', code => {
  if (code !== 0) {
    console.log('build exited code ' + code);
  }

  if (build.stdin) {
    build.stdin.end();
  }
});
