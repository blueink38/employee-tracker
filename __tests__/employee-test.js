const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('creates an Employee object', () =>{
    const employee = new Employee('Fred', 0, 'fred@email.com');

    expect(employee.name).toBe('Fred')
    expect(employee.id).toBe(0);
    expect(employee.email).toBe('fred@email.com')
});

test('checks that the Employee has a name', () =>{
    const employee = new Employee('Fred', 0, 'fred@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('checks that the Employee has an id number', () =>{
    const employee = new Employee('Fred', 0, 'fred@email.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

test('checks that the Employee has an email address', () =>{
    const employee = new Employee('Fred', 0, 'fred@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('checks that the Employee class correctly returns a role', () =>{
    const employee = new Employee('Fred', 0, 'fred@email.com');

    expect(employee.getRole()).toBe('Employee');
});