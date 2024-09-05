// class student {
//     static school = 'xyz'
//     constructor(name, classes, fees, contact) {
//         this.name = name
//         this.classes = classes
//         this.fees = fees
//         this.contact = contact
//     }
//     detail() {
//         console.log(`Student detail :- \n name - ${this.name} classes - ${this.classes} fees- ${this.fees} contact- $`);
//     }

//     get totalfees() {
//         return this.fees + 1000
//     }

//     set tution(tution) {
//         this._tution = tution
//     }
// }

// let krishna = new student('krishna', 'fullStack', 5500, 790970907)
// krishna.detail()
// console.log(student.school)

// console.log(krishna.totalfees)
// krishna.tution=500
// console.log(krishna._tution)


//Inheritance in JS

class Animal {
    #region = 'Indian'
    legs = 4
    eyes = 2
    constructor(color){
        this.color=color
    } 
    detail(){
        console.log(`this is animal detail color - ${this.color}`);
    }
    sound(){
        console.log(`animal makes sound`);
    }
    showRegion(){
        console.log(`this animal region is ${this.#region}`);
    }
}

class Dog extends Animal{
    constructor(bread, color){
        super(color)
        this.bread = bread
    }
    detail(){
        console.log(`dog detail - lages- ${this.legs} bread= ${this.bread}`);
        
    }
    sound(){
        console.log('bhow-bhow')
    }
}
let pitbull = new Dog('pitbull', 'black')
console.log(pitbull.eyes);
pitbull.detail()
pitbull.sound()
pitbull.showRegion()