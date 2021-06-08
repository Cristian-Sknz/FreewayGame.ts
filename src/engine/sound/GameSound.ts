import p5, { SoundFile } from "p5";
import "p5/lib/addons/p5.sound";

export default class GameSound {

    private sound : SoundFile;

    constructor(p5: p5, path : NodeRequire){
        this.sound = ((p5 as any) as p5.SoundFile).loadSound([path]);
    }

    public getSound() : SoundFile {
        return this.sound;
    }
}