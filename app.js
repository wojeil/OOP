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
        //validation added to make sure it's only letters.
        validate: function (value) {
          var pass = value.match(
            /[a-z]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid name";
        }
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id",
        //validation added to make sure it's only numbers.
        validate: function (value) {
          var pass = value.match(
            /[0-9]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid ID";
        }
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
        //validation added to make sure it's in email add format.
        validate: function (value) {
          var pass = value.match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid email";
        }

      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
        //validation added to make sure it's only numbers.
        validate: function (value) {
          var pass = value.match(
            /[0-9]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid office number";
        }
      },
    ])
    .then(answers => {
      //place manager into empty array
      var m = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
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
        choices: ["Engineer", "Intern", "None. Complete"],
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
      if (answers.newMember === "None. Complete") {
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
        name: "name",
        //validation added to make sure it's only letters.
        validate: function (value) {
          var pass = value.match(
            /[a-z]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid name";
        }
      },
      {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id",
        //validation added to make sure it's only numbers.
        validate: function (value) {
          var pass = value.match(
            /[0-9]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid ID";
        }
      },
      {
        type: "input",
        message: "What is your engineer's email address?",
        name: "email",
        //validation added to make sure it's in email add format.
        validate: function (value) {
          var pass = value.match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid email";
        }
      },
      {
        type: "input",
        message: "What is your engineer's github?",
        name: "github"
      },
    ])
    .then(answers => {
      //place engineer into empty array
      var e = new Engineer(answers.name, answers.id, answers.email, answers.github);
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
const intern = () => {
  //place prompts for intern
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name",
        //validation added to make sure it's only letters.
        validate: function (value) {
          var pass = value.match(
            /[a-z]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid name";
        }
      },
      {
        type: "input",
        message: "What is your intern's ID?",
        name: "id",
        //validation added to make sure it's only numbers.
        validate: function (value) {
          var pass = value.match(
            /[0-9]/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid ID";
        }
      },
      {
        type: "input",
        message: "What is your intern's email address?",
        name: "email",
        //validation added to make sure it's in email add format.
        validate: function (value) {
          var pass = value.match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          );
          if (pass) {
            return true;
          }

          return "Please enter a valid email";
        }
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
      },
    ])
    .then(answers => {
      //place intern into empty array
      var i = new Intern(answers.name, answers.id, answers.email, answers.school);
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
  //will contain fs write to add all the above into an html file
  fs.writeFile(outputPath, render(fullSquadRender), err => {
    if (err) {
      return console.log(err);
    }
    return console.log("success!!!");
  }
  )

}
manager();