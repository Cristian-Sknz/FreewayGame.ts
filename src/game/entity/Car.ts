import p5, { Image } from "p5";
import Sprite from "../../engine/entity/Sprite";

export default class Car extends Sprite {

    private width : number;
    private height : number;
    private carSkin: Image;

    constructor(p5: p5, carSkin: Image, x?: number, y?: number, speed?: number, width?: number, height?: number){
        super(p5);
        this.carSkin = carSkin;
        this.x = x;
        this.y = y;
        this.speed = (speed === undefined) ? 5 : speed;
        this.width = (width === undefined) ? 50 : width;
        this.height = (height === undefined) ? 40 : height;
    }

    public draw() {
        this.p5.image(this.carSkin, this.x, this.y, this.width, this.height);
        this.animate();
    }

    public getWidth(){
        return this.width;
    }

    public getHeight(){
        return this.height;
    }

    public animate() {
        if (this.x < -30){
            this.x = 30 + this.p5.width;
        }
        this.x-= this.speed;
    }
}