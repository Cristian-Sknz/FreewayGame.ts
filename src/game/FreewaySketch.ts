import { Image } from "p5";
import Sketch from "../engine/Sketch";
import GameSound from "../engine/sound/GameSound";
import Actor from "./entity/Actor";
import Car from "./entity/Car";

export default class FreewaySketch extends Sketch {

    private background: any;

    private actor: Actor;
    private collide = require("p5collide");
    private cars: Car[] = [];
    private sounds: GameSound[] = [];

    private points: number;
     
    public preload(): void {
        this.background = this.p5.loadImage(require('../../resources/images/estrada.png'));
        this.actor = new Actor(this.p5, this.loadImage(require('../../resources/images/ator-1.png')), 100, 366)
        this.sounds = [
            new GameSound(this.p5, require('../../resources/sounds/trilha.mp3')),
            new GameSound(this.p5, require('../../resources/sounds/pontos.wav')),
            new GameSound(this.p5, require('../../resources/sounds/colidiu.mp3'))
        ];
        this.cars = [
            new Car(this.p5, this.loadImage(require('../../resources/images/carro-0.png')), 400, 40, 3),
            new Car(this.p5, this.loadImage(require('../../resources/images/carro-1.png')), 400, 96, 2.5),
            new Car(this.p5, this.loadImage(require('../../resources/images/carro-2.png')), 400, 150, 3.2),
            new Car(this.p5, this.loadImage(require('../../resources/images/carro-0.png')), 400, 209, 5),
            new Car(this.p5, this.loadImage(require('../../resources/images/carro-1.png')), 400, 268, 3.3),
            new Car(this.p5, this.loadImage(require('../../resources/images/carro-2.png')), 400, 320, 2.3)
        ];
    }

    public loadImage(require: NodeRequire | any): Image {
        return this.p5.loadImage(require);
    }

    public setup(): void {
        this.p5.createCanvas(500, 400).parent("app");
        this.sounds[0].getSound().loop();
        this.points = 0;
    }

    public draw(): void {
        this.p5.background(this.background);
        this.actor.draw();
        for (let car of this.cars){
            car.draw();
        }
        this.checkPoints();
        this.checkCollisions();
        this.scoreboard();
    }

    public scoreboard(): void {
        this.p5.textAlign(this.p5.CENTER);
        this.p5.textSize(25);
        this.p5.fill(3, 23, 252);
        this.p5.text(this.points.toString(), this.p5.width/5, 28);
    }

    private checkCollisions(): void {
        for (let car of this.cars){
            if (this.collide.collideRectCircle(car.getX(), car.getY(), car.getWidth(), car.getHeight() - 4, 
            this.actor.getX(), this.actor.getY(), this.actor.getWidth()/2)){
                this.actor.resetPosition();
                this.sounds[2].getSound().play();
                this.points = 0;
            }
        }
    }

    private checkPoints(): void {
        if (this.actor.getY() < 10){
            this.points++;
            this.actor.resetPosition();
            this.sounds[1].getSound().play();
        }
    }
}