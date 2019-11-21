export class Car{
    constructor(id){
        this.id = id;
    }
    identify(){
        return `Car Id: ${this.id}`;
    }
}