const { spawn } = require('child_process');
const child = spawn('docker', ['run', '--rm', 'keyv:latest']);
const p = require('process');


child.stdout.setEncoding('utf8');
child.stdout.on('data', chunk => {
    p.stdout.write(chunk);
});

child.stderr.setEncoding('utf8');
child.stderr.on('data', chunk => {
    p.stderr.write(chunk);
})

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
