const connection = require ( `./config/connection`);
const inquirer = require (`inquirer`);
const inputConnection = require ( `./java/valid`);
const cTable = require (`console.table`);
const chalk = require (`chalk`);
const asciiArt = require (`figlet`);


connection.connect((error)=>{
    if(error) throw error;
    console.log(chalk.blue.bold(`===============`));
    console.log(``);
    console.log(chalk.redBright.bold(figlet.textSync(`Employee Tracker`)));
    console.log(``);
    console.log(`     ` + chalk.redBright.bold(`Creator; Christian S.`));
    console.log(``);
    console.log(chalk.blue.bold(`===============`));
    promptUser();
});

