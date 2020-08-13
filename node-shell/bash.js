// Output a prompt
process.stdout.write('prompt > ');
const pwd = require('./pwd')
const curl = require('./curl');
const ls = require('./ls');
const cat = require('./cat');
pwd()
ls()
curl();
cat()
