var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Handle } from "./handle";
import { PointPool } from "./pointPool";
export class  DragMarker extends Handle{
    constructor(x, y, radius, cropperSettings) {
        super(this, x, y, radius, cropperSettings);
        this.iconPoints = [];
        this.scaledIconPoints = [];
        this.getDragIconPoints(_this.iconPoints, 1);
        this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        
    }
    draw(ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    getDragIconPoints (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(0, maxLength));
        arr.push(PointPool.instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(PointPool.instance.borrow(maxLength, 0));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(PointPool.instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(0, -maxLength));
        arr.push(PointPool.instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(PointPool.instance.borrow(-maxLength, 0));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(PointPool.instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(PointPool.instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    drawIcon(ctx, points) {
        if (this.cropperSettings.showCenterMarker) {
            ctx.beginPath();
            ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
            for (var k = 0; k < points.length; k++) {
                var p = points[k];
                ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
            }
            ctx.closePath();
            ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
            ctx.fill();
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
            ctx.stroke();
        }
    };
    recalculatePosition(bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        PointPool.instance.returnPoint(c);
    };
    
}
//# sourceMappingURL=dragMarker.js.map