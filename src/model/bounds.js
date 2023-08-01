import { PointPool } from "./pointPool";
export class Bounds {
    constructor(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
        get width () {
            return this.right - this.left;
        }
        get height() {
            return this.bottom - this.top;
        }
    getCentre() {
        var w = this.width;
        var h = this.height;
        return PointPool.instance.borrow(this.left + w / 2, this.top + h / 2);
    };
}
//# sourceMappingURL=bounds.js.map