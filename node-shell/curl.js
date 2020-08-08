const request = require('request')

module.exports = function () {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const cmd1 = cmd.split(' ')[0]
    const filename = cmd.split(' ')[1]
    process.stdout.write('\nprompt > ');
  if (cmd1 === `curl`) {
      request(filename, function (err, response, body) {
        if (err) {
          throw err;
        }
        // if (response) {
        //   process.stdout.write(response)
        // }
        else {
          process.stdout.write(response)
          process.stdout.write(body);
          process.stdout.write("prompt > ");
        }
      })
    }
  }
)}
