class Example {
    constructor(name) {
        this.name = name;
    }

    static a_class_variable = 'Hello there!';

    test_method() {
        console.log(Example.a_class_variable); // notably not in the instance's context
    }
}

const my_instance = new Example('Zaviar');
my_instance.test_method(); // Hello there!

Example.a_class_variable = 'Goodbye now!';

console.log(Example.a_class_variable); // Goodbye now!
my_instance.test_method(); // Goodbye now!
