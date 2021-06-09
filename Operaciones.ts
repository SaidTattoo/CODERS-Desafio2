export class Operaciones {
    private a :number =  0 ;
    private b :number =  0;
    
    constructor(a:number, b:number){
        this.a = a;
        this.b = b
    }

    suma () {
        return this.a + this.b
    }
    resta() {
        return this.a - this.b
    }
}