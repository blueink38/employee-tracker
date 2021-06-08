const Engineer = require('../lib/Engineer')

test('creates an Engineer object', () =>{
    const engineer = new Engineer('Fred', 1, 'fred@email.com', 'freddy-boy');

    expect(engineer.name).toBe('Fred')
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('fred@email.com');
    expect(engineer.github).toBe('github.com/freddy-boy');
});

test('checks that the Engineer has a name', () =>{
    const engineer = new Engineer('Fred', 1, 'fred@email.com', 'freddy-boy');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test('checks that the Engineer has an id number', () =>{
    const engineer = new Engineer('Fred', 1, 'fred@email.com', 'freddy-boy');

    expect(engineer.getID()).toEqual(expect.any(Number));
});

test('checks that the Engineer has an email address', () =>{
    const engineer = new Engineer('Fred', 1, 'fred@email.com', 'freddy-boy');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('checks if the Engineer role is returned', () =>{
    const enineer = new Engineer('Fred', 1, 'fred@email.com', 'freddy-boy');

    expect(enineer.getRole()).toBe('Engineer')
});

test('checks to make sure github profile is returned correctly', () =>{
    const engineer = new Engineer('Fred', 1, 'fred@email.com', 'freddy-boy');

    expect(engineer.getGithub()).toBe('github.com/freddy-boy');
});