const fs = require('fs')

module.exports = function () {
    process.stdin.on('data', (data) => {
      const cmd = data.toString().trim(); 
      const cmd1 = cmd.split(' ')[0]
      const filename = cmd.split(' ')[1]
      process.stdout.write('\nprompt > ');
    if (cmd1 === `cat`) {
      fs.readFile(`${filename}`, 'utf8', (err, data) => {
    if (err) {
        throw err
    } else {
        process.stdout.write(data)
        process.stdout.write("prompt > ");
    }
}
)
    }
}
    )}
