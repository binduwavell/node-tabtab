
const debug    = require('debug')('tabtab');
const minimist = require('minimist');
const npmlog   = require('npmlog');
const commands = require('./commands');

let opts = minimist(process.argv.slice(2), {
  alias: {
    h: 'help',
    v: 'version'
  }
});

const cmd = opts._[0];


debug('Init tabtab with %s cmd', cmd);

if (opts.help) {
  console.log(commands.help());
  process.exit(0);
} else if (opts.version) {
  console.log(commands.help());
  process.exit(0);
} else if (commands[cmd]) {
  debug('Run command %s with options', cmd, opts);
  commands[cmd](opts);
} else {
  console.log(commands.help());
}