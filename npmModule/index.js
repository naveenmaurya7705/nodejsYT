import chalk from 'chalk';
console.log(chalk.greenBright.bold.underline('Hello world!'));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
import validator from 'validator';
// import isEmail from 'validator/lib/isEmail';
{/* <script type="text/javascript" src="validator.min.js"></script> */}

 const res= validator.isEmail('ngh@banir.com'); 
 console.log(res ? chalk.greenBright.bold.underline.inverse(res) : chalk.redBright.bold.underline(res) );
