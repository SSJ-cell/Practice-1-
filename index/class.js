'use strict';

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(Value){
        this._age = Value<0 ? 0 : Value;
    }

    speak(){
        console.log('Hello!.' + this.name);
    }
}

const ellie = new Person('ellie', -1);
ellie.speak();
console.log(ellie.age);