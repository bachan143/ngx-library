import { CropperDrawSettings } from "./cropperDrawSettings";
export class CropperSettings {
    constructor(settings) {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new CropperDrawSettings();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.markerSizeMultiplier = 1;
        this.centerTouchRadius = 20;
        this.showCenterMarker = true;
        this.allowedFilesRegex = /\.(jpe?g|png|gif|bmp)$/i;
        this.cropOnResize = true;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this.showFullCropInitial = false;
        this._rounded = false;
        this._keepAspect = true;
        if (typeof settings === "object") {
            Object.assign(this, settings);
        }
    }
    
        get rounded() {
            return this._rounded;
        }
        set rounded(val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        }
    
        get keepAspect() {
            return this._keepAspect;
        }
        set keepAspect(val) {
            this._keepAspect = val;
            if (this._rounded === true && this._keepAspect === false) {
                console.error("Cannot set keep aspect to false on rounded cropper. Ellipsis not supported");
                this._keepAspect = true;
            }
        }
}
//# sourceMappingURL=cropperSettings.js.map