export class Point {
    constructor(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
        get next() {
            return this._next;
        }
        set next(p) {
            this._next = p;
        }
        get prev() {
            return this._prev;
        }
        set prev(p) {
            this._prev = p;
        }
}
//# sourceMappingURL=point.js.map