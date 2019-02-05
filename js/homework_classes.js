// Задача 1.


// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }


class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }    
}

const comp = new Component('span');

// Задача 2.


// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }

// Component.prototype.setText = function (text) { 
//     this.node.textContent = text;
// };



class Component {
    constructor(tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    } 
    setText(text) {
        this.node.textContent = text;
    }    
}

const comp = new Component('span');


// Задача 3.

class Calculator {
    constructor(value) {
        this._number = value;
    }

    get number() {
        return this_number;
    }

    set number(value) {
        this._number = value;
    }

    plus(value) {
        this._number += value;
    }

    minus(value) {
        this._number -= value;
    }

    multiply(value) {
        this._number *= value;
    }

    split(value) {
        this._number /= value;
    }

}

const calc1 = new Calculator();