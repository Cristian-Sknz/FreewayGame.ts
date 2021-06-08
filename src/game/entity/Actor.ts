import p5, { Image } from "p5";
import SpritePlayer from "../../engine/entity/SpritePlayer";

export default class Actor extends SpritePlayer {

    private actorSkin: Image;
    private startX: number;
    private startY: number;

    private width: number;
    private height: number;

    constructor(p5: p5, image: Image, startX: number, startY: number, size?: number) {
        super(p5);
        this.actorSkin = image;
        this.x = this.startX = startX;
        this.y = this.startY = startY;
        this.speed = 5;
        this.width = (size === undefined) ? 30 : size;
        this.height = (size === undefined) ? 30 : size
    }

    public getWidth(){
        return this.width;
    }

    public getHeigth(){
        return this.height;
    }

    public draw() {
        this.p5.image(this.actorSkin, this.x, this.y, this.width, this.height);
        this.animate();
    }

    public animate() {
        this.keyIsDown([this.p5.UP_ARROW], () => this.y -= this.speed);
        this.keyIsDown([this.p5.DOWN_ARROW], () => this.y += this.speed);
        this.keyIsDown([this.p5.LEFT_ARROW], () => this.x -= this.speed);
        this.keyIsDown([this.p5.RIGHT_ARROW], () => this.x += this.speed);
        this.checkLimit();
    }

    public resetPosition() {
        this.x = this.startX;
        this.y = this.startY;
    }

    private checkLimit(){
        if (this.y > 366) {
            this.y = 366;
        }
        if (this.x < 5) {
            this.x = 5;
        }
        if (this.x > 465) {
            this.x = 465;
        }
    }
}