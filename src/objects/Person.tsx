class Person {
    age: number;
    name: string;

    constructor(name: string,
                age: number) {
                    this.name = name;
                    this.age = age;
                }
    information() {
        return "Information: \n" + this.name + this.age
    };

};

export { Person };
