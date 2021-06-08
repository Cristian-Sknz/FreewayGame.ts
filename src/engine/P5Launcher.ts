import p5 from "p5";
import Sketch from "./Sketch";

export default class P5Launcher extends p5 {

    constructor(sketch : Sketch){
        super((p : p5) => {
            sketch.p5 = p;
            p.preload = () => {
                console.log("Carregando -preload();");
                sketch.preload();
            }
            p.setup = () => sketch.setup();
            p.draw = () => sketch.draw();
            p.remove = () => sketch.remove();
        });
    }
}
