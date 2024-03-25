#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
  { message:chalk.blue("enter first number"), type: "number", name: "firstnumber" },
  { message: chalk.blue("enter second number"), type: "number", name: "secondnumber" },
  {
    message: chalk.yellow("select one of these operator to perform action"),
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

//conditional statement
if (answer.operator === "addition") {
  console.log(chalk.green(answer.firstnumber + answer.secondnumber));
} else if (answer.operator === "subtraction") {
  console.log(chalk.green(answer.firstnumber - answer.secondnumber));
} else if (answer.operator === "multiplication") {
  console.log(chalk.green(answer.firstnumber * answer.secondnumber));
} else if (answer.operator === "division") {
  console.log(chalk.green(answer.firstnumber / answer.secondnumber));
} else {
  console.log(chalk.red("Please select a valid operator"));
}
