import { Point } from "./point";
import { CropperSettings } from "../cropperSettings";
export class Handle{
    constructor(x, y, radius, settings) {
        this.cropperSettings = new CropperSettings();
        this.over = false;
        this.drag = false;
        this._position = new Point(x, y);
        this.offset = new Point(0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    setDrag (value) {
        this.drag = value;
        this.setOver(value);
    };
    draw(ctx) {
        // this should't be empty
    };
    setOver(over) {
        this.over = over;
    };
    touchInBounds (x, y) {
        return (x > this.position.x - this.radius + this.offset.x &&
            x < this.position.x + this.radius + this.offset.x &&
            y > this.position.y - this.radius + this.offset.y &&
            y < this.position.y + this.radius + this.offset.y);
    };
        get position() {
            return this._position;
        }
    setPosition (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
}
export { Handle };
//# sourceMappingURL=handle.js.map