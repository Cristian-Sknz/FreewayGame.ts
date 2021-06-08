import p5 from "p5";
import Sprite from "./Sprite";

export default abstract class SpritePlayer extends Sprite{

    constructor(protected p5 : p5){
        super(p5);
    }
    
    public keyIsDown(key: number[], f: Function) : void{
        for (let i of key){
            if (this.p5.keyIsDown(i)){
                f.apply(null);
            }
        }
    }

}