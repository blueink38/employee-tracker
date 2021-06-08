const Intern = require('../lib/Intern')

test('creates an Intern object', () =>{
    const intern = new Intern('charlotte', 1, 'charlotte@email.com', 'school');

    expect(intern.name).toBe('charlotte')
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('charlotte@email.com');
    expect(intern.school).toBe('school');
})

test('checks that the Intern has a name', () =>{
    const intern = new Intern('charlotte', 1, 'charlotte@email.com', 'school');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test('checks that the Intern has an id number', () =>{
    const intern = new Intern('charlotte', 1, 'charlotte@email.com', 'school');

    expect(intern.getID()).toEqual(expect.any(Number));
});

test('checks that the Intern has an email address', () =>{
    const intern = new Intern('charlotte', 1, 'charlotte@email.com', 'school');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('checks if the Intern role is returned', () =>{
    const intern = new Intern('charlotte', 1, 'charlotte@email.com', 'school');

    expect(intern.getRole()).toBe('Intern')
});

test('checks to make sure school is returned correctly', () =>{
    const intern = new Intern('charlotte', 1, 'charlotte@email.com', 'school');

    expect(intern.getSchool()).toBe('school');
});