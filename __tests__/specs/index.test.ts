import {Employee, greeter} from '../../src/index';

test('hallo name', () => {
    let person = new Employee();
    person.firstName = 'Roman';
    expect(greeter(person)).toBe('Hallo Roman');
});