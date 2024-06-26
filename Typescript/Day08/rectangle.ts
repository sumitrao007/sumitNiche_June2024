import {Shape} from './shape';

export class Rectangle extends Shape{
    length:number;
    breadth:number;
    area:number;

    constructor(l:number,b:number){
        super();
        this.length=l;
        this.breadth=b;
    }

   override Myarea(): void {
        this.area=this.length*this.breadth;
    }

    dispaly(){
        console.log(`
        ================ Rectangle Area==============
            Length  :: ${this.length}
            Breadth :: ${this.breadth}
            Area    :: ${this.area}
            `)
    }

}