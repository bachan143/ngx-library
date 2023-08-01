import { Bounds } from "./bounds";
export class CropPosition{
    constructor(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    toBounds() {
        return new Bounds(this.x, this.y, this.w, this.h);
    };
    isInitialized () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
}
//# sourceMappingURL=cropPosition.js.map