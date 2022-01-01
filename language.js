const QueenAmdi = require('queenamdi-public');
const build = QueenAmdi.build
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./language/' + build.LANG + '.json')) {
    console.log(
        chalk.green.bold('🌐 Loading ' + build.LANG + ' language..')
    );

    var json = JSON.parse(fs.readFileSync('./language/' + build.LANG + '.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var json = JSON.parse(fs.readFileSync('./language/EN.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}