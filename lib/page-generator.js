manager = [];
engineers = [];
interns = [];


const generateManager = manager =>{
    if(manager[0] === undefined){
        return
    }
    else{
        return`
        <div class="card">
            <div class="card-header bg-danger text-white text-center">
                <i data-feather="coffee"></i>
                ${manager[0].name}
            </div>
            <div class="bg-danger text-white text-center ">Manager</div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush border rounded">
                    <li class="list-group-item">ID: ${manager[0].id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${manager[0].email}">${manager[0].email}</a></li>
                    <li class="list-group-item">Office Number: ${manager[0].officeNumber}</a></li>
                </ul>
            </div>
        </div>
        `
    }
};

const generateEngineer = engineers =>{
    return`
    ${engineers
    .map(({name, id, email, github}) =>{
        return`
        <div class="card">
            <div class="card-header bg-danger text-white text-center"><i data-feather="headphones"></i>
            ${name}
            </div>
            <div class="bg-danger text-white text-center ">Engineer</div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush border rounded">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
                    <li class="list-group-item"><a href = "https://github.com/${github}" target="_blank">Github: ${github}</a></li>
                </ul>
            </div>
        </div>
        `;
    })
    .join('')}
    `;
};

const generateIntern = interns =>{
    return`
    ${interns
    .map(({name, id, email, school}) =>{
        return`
        <div class="card">
            <div class="card-header bg-danger text-white text-center"><i data-feather="smartphone"></i>
            ${name}
            </div>
            <div class="bg-danger text-white text-center ">Intern</div>
            <div class="card-body bg-light">
                <ul class="list-group list-group-flush border rounded">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
        `;
    })
    .join('')}
    `;
};

const separateTeam = team =>{
    for(let i=0; i<team.length; i++){
        if(team[i].constructor.name === 'Manager'){
            manager.push(team[i])
        }
        else if(team[i].constructor.name === 'Engineer'){
            engineers.push(team[i])
        }
        else{
            interns.push(team[i])
        };
    };
};

pageGeneration = function (team) {
    separateTeam(team || []);

    return`
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <!--Bootstrap CSS-->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
                <link rel="stylesheet" href="./style.css">

                <title>Team Viewer</title>
            </head>
            
            <body>
                <header>
                    <div class="flex-row">
                        <h1 class="p-3 mb-2 bg-primary text-center"> MY TEAM </h1>
                    </div>
                </header>
                <div class="d-flex flex-wrap justify-content-around" style="padding: 10%">
                    ${generateManager(manager)}
                    ${generateEngineer(engineers)}
                    ${generateIntern(interns)}
                </div>

                <!--Bootstrap JS-->
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
                <script>
                    feather.replace()
                </script>
            </body>
        </html>`
}

module.exports = pageGeneration()