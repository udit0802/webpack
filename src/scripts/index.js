// import '../styles/index.scss';
 import {Car} from './models/car.js';

console.log('webpack starterkit');

const i = 100;


//rest parameters
function test(day,...carIds){
    carIds.forEach(id=>console.log(id));
}

test('Monday',1,2,3);


//destructuring arrays
let cardIds = [1,2,3];
let [car1,car2,car3] = cardIds;
console.log(car1,car2,car3);

let testIds = [1,2,5];
let remTests;
//comma denotes the element to be skipped
[,...remTests] = testIds;
console.log(remTests);

//destructuring objects
let car = {id : 5000,style : 'convertible'};
let id,style;
({id,style} = car);
console.log(id,style);

//spread syntax
function carsTest(car1,car2,car3){
    console.log(car1,car2,car3);
}
let carI = [1,2,3,4];
carsTest(...carI);

console.log(Number.parseInt('55'));
console.log(Number.parseFloat('55.89ADF'));

if(5===5){
    var msg = 'Equal';
    console.log(msg);
}
console.log(msg);

//closure
let app = (function(){
    let cid = 123;
    let gid = function(){
        console.log(this);
        return cid;
    };
    return{
        gid : gid
    };
})();

console.log(app.gid());


let o = {
    carId : 123,
    getTid : function(){
        return this.carId;
    },
    getId : function(prefix){
        return prefix + this.carId;
    }
};

let newCar = {carId : 456};
console.log(o.getTid.call(newCar));
console.log(o.getId.apply(newCar,['ID: ']));

let newFn = o.getTid.bind(newCar);
console.log(newFn());

let hell = () => 'hello';
console.log(hell());

// class Car{
//     constructor(id){
//         this.id = id;
//     }
//     identify(){
//         return `Car Id: ${this.id}`;
//     }
// }

let c = new Car(123);
console.log(c.identify());

class Vehicle{
    constructor(){
        this.type = 'plane';
    }
    start(){
        return `Starting : ${this.type}`;
    }
}

class Aeroplane extends Vehicle{
    start(){
        return 'in car start ' + super.start();
    }
}

let plane = new Aeroplane();
console.log(plane.start());

let timeout = setTimeout(function(){
    console.log();
},1000);

let promise = new Promise(
    function(resolve,reject){
        setTimeout(resolve,100,'value');
    }
);

promise.then(
    value => console.log('fulfilled : ' + value),
    error => console.log('rejected : ' + error)
);