import p5 from "p5";

export default abstract class Sprite {

    protected x : number;
    protected y : number;

    protected speed : number;

    constructor(protected p5 : p5){}

    public getX(): number{
        return this.x;
    }

    public getY():number {
        return this.y;
    }

    public setX(x : number): void {
        this.x = x;
    }

    public setY(y : number): void {
        this.y = y;
    }

    public setSpeed(speed : number): void{
        this.speed = speed;
    }

    public abstract draw() : void | any;
    public abstract animate() : void | any;

}