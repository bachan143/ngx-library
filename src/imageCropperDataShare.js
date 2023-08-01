export class ImageCropperDataShare{
    constructor(){
        this.share = {};
    }
    setPressed(canvas) {
        this.pressed = canvas;
    };
    setReleased (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    setOver(canvas) {
        this.over = canvas;
    };
    setStyle(canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    
}
//# sourceMappingURL=imageCropperDataShare.js.map