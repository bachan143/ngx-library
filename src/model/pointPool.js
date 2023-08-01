import { Point } from "./point";
export class PointPool{
    constructor(initialSize=1) {
        var prev = (this.firstAvailable = new Point());
        for (var i = 1; i < initialSize; i++) {
            var p = new Point();
            prev.next = p;
            prev = p;
        }
    }
        get instance() {
            return PointPool._instance;
        }
borrow (x, y) {
        if (this.firstAvailable == null) {
            throw "Pool exhausted";
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    returnPoint(p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
}
//# sourceMappingURL=pointPool.js.map