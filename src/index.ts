interface Person {
    firstName: string;
}

export class Employee {
    firstName: string;
    /*
    constructor(firstName: string) {
        this.firstName = firstName;
    }
    */
}

export function greeter(person: Person) {
    return 'Hallo ' + person.firstName; 
}