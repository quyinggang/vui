const glob = require('glob');
const fs = require('fs');
const endOfLine = require('os').EOL;

glob('packages/!(themes)', function(err, files) {
  let components = '';
  const max = files.length - 1;
  files = files.sort();
  files.forEach((item, i) => {
    const name = String(item).replace('packages/', '');
    const path = `./${item}/index.js`;
    const sp = i === max ? '' : ',';
    components = `${components}${endOfLine}  "${name}": "${path}"${sp}`;
  });
  fs.writeFileSync('components.json', `{${components}${endOfLine}}`);
});