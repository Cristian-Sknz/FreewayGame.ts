import p5 from "p5";
import "p5/lib/addons/p5.sound";

export default abstract class Sketch {

    public p5 : p5;

    public abstract preload() : void;
    public abstract setup() : void;
    public remove() {}
    public abstract draw() : void;
}