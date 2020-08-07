module.exports = function () {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline

    //  process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
    if (cmd === 'pwd') {
      let cmd = process.cwd();
      // process.stdout.write(`${process.cwd()}`);
      process.stdout.write(cmd);
    }
  });
};
