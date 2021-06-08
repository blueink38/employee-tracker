const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const inquirer = require('inquirer');
const page = require('./page-generation')
const writeFile = require('./generate-html.js');

function Generator(){
    this.team = [];
};

Generator.prototype.initializePage = function() {
    console.log('Please follow the prompts and enter the information for the Team Manager.');

    inquirer.prompt([
    {
      type: 'text',
      name: 'name',
      message: "What is the Team Manager's name?",
      validate: nameInput => {
          if(nameInput){
              return true;
          }
          else{
              console.log('Please enter a name for the Team Manager')
              return false;
          }
        }  
    },
    {
        type: 'number',
        name: 'idNum',
        message: "Please enter the Team Manager's ID number.",
        validate: idNumInput => {
            if(idNumInput && Number.isInteger(idNumInput) && idNumInput > 0){
                return true;
            }
            else{
                console.log("Please enter a number greater than 0")
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter an email address for the Team Manager.',
        validate: emailInput => {
            if(emailInput){
                return true;
            }
            else{
                console.log("Please enter an email address.")
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the Team Manager's office number",
        validate: officeNumberInput => {
            if(officeNumberInput && Number.isInteger(officeNumberInput) && officeNumberInput > 0){
                return true;
            }
            else{
                console.log("\nPlease enter a number greater than 0")
                return false;
            }
        }
    }])
    .then(({name, idNum , email, officeNumber}) => {
        this.team.push(new Manager(name, idNum, email, officeNumber));

        console.log('Team Manager data saved');
        this.continueGeneration();
    });
}

Generator.prototype.continueGeneration = function() {
    inquirer.prompt({
        type: 'list',
        name: 'additions',
        message: 'Would you like to add any engineers or interns to this team?',
        choices: [new inquirer.Separator(), "Engineer", "Intern", "None", new inquirer.Separator()],
        default: 2
    }).then(({additions}) =>{
        if(additions === 'Engineer'){
            this.addEngineer();
        }
        else if(additions === 'Intern'){
            this.addIntern();
        }
        else{
            this.createHTML(pageGeneration(this.team))
        }
    })
}

Generator.prototype.addEngineer = function() {
    console.log("Please enter the engineer's information");

    inquirer.prompt([
        {
          type: 'text',
          name: 'name',
          message: "What is the engineers's name?",
          validate: nameInput => {
              if(nameInput){
                  return true;
              }
              else{
                  console.log('Please enter a name for the engineer.')
                  return false;
              }
            }  
        },
        {
            type: 'number',
            name: 'idNum',
            message: "Please enter the engineer's ID number.",
            validate: idNumInput => {
                if(idNumInput && Number.isInteger(idNumInput) && idNumInput > 0){
                    return true;
                }
                else{
                    console.log("Please enter a number greater than 0")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter an email address for the engineer.',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }
                else{
                    console.log("Please enter an email address.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "Please enter the engineer's github username.",
            validate: githubInput => {
                if(githubInput){
                    return true;
                }
                else{
                    console.log("\nPlease enter a username.")
                    return false;
                }
            }
        }]
    )
    .then(({name, idNum , email, github}) => {
        this.team.push(new Engineer(name, idNum, email, github));

        console.log('Engineer data saved');
        this.continueGeneration();
    });    
}

Generator.prototype.addIntern = function() {
    console.log("Please enter the intern's information");

    inquirer.prompt([
        {
          type: 'text',
          name: 'name',
          message: "What is the intern's name?",
          validate: nameInput => {
              if(nameInput){
                  return true;
              }
              else{
                  console.log('Please enter a name for the intern.')
                  return false;
              }
            }  
        },
        {
            type: 'number',
            name: 'idNum',
            message: "Please enter the intern's ID number.",
            validate: idNumInput => {
                if(idNumInput && Number.isInteger(idNumInput) && idNumInput > 0){
                    return true;
                }
                else{
                    console.log("Please enter a number greater than 0")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter an email address for the intern.',
            validate: emailInput => {
                if(emailInput){
                    return true;
                }
                else{
                    console.log("Please enter an email address.")
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "Please enter the intern's school.",
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                }
                else{
                    console.log("\nPlease enter a school name.")
                    return false;
                }
            }
        }]
    )
    .then(({name, idNum , email, school}) => {
        this.team.push(new Intern(name, idNum, email, school));

        console.log('Intern data saved');
        this.continueGeneration();
    });    
}

Generator.prototype.createHTML = function(pageData){
    writeFile(pageData)
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
      .catch(err => {
        console.log(err);;
    });
}

module.exports = Generator;