/* eslint-disable */
const exec = require('child_process').exec;

exec('node -v', function (err, stdout) {
  if (err) throw err;

  if (parseFloat(stdout.slice(1)) < 4) {
    throw new Error('This project requires node 4.0 or greater.');
  }
});
