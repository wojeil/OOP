const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//where all my new objects will be pushed 
const fullSquadRender = [];
render(fullSquadRender);




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const manager = () => {
  //place all manager prompts

  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ])
    .then(answers => {
      //place manager into empty array
      var m =Manager + answers;
      fullSquadRender.push(m);
       newMember();
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}
const newMember = () => {
  inquirer
    //place prompt to ask for new member preff list
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        message: "Would you like to add a new member?",
        choices: ["Engineer", "Intern", "None"],
        name: "newMember"
      }
    ])
    .then(answers => {
      //jump to engineer prompts
      if (answers.newMember === "Engineer") {
         engineer();
      }
      //jump to intern prompts
      if (answers.newMember === "Intern") {
         intern();
      }
      //if squad is complete then run full squad
      if (answers.newMember === "None") {
         fullSquad();
      }
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}
const engineer = () => {
  //place prompts for engineer
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your engineer's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your engineer's github?",
        name: "github"
      },
    ])
    .then(answers => {
      //place engineer into empty array
      var e =Engineer+answers;
      fullSquadRender.push(e);
      newMember();
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}
const intern=()=>{
  //place prompts for intern
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your intern's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
      },
    ])
    .then(answers => {
      //place intern into empty array
      var i =Intern+answers;
      fullSquadRender.push(i);
      newMember();
    })
    .catch(error => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}
const fullSquad = () => {
  //will contain fs write
  fs.writeFile(outputPath,render(fullSquadRender),err => {
    if (err) {
      return console.log(err);
    }
    return console.log("success!!!");
  }
  )

}
manager();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
