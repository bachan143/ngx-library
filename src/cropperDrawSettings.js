export class CropperDrawSettings{
    constructor(settings) {
        this.lineDash = false;
        this.strokeWidth = 1;
        this.strokeColor = "rgba(255,255,255,1)";
        this.cornerMarkerFillColor = "rgba(255,255,255,1)";
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = "rgba(0,0,0,1)";
        this.dragIconFillColor = "rgba(255,255,255,1)";
        if (typeof settings === "object") {
            this.lineDash = settings.lineDash || this.lineDash;
            this.strokeWidth = settings.strokeWidth || this.strokeWidth;
            this.strokeColor = settings.strokeColor || this.strokeColor;
            this.cornerMarkerFillColor = settings.cornerMarkerFillColor ||
                this.cornerMarkerFillColor;
            this.dragIconStrokeWidth =
                settings.dragIconStrokeWidth || this.dragIconStrokeWidth;
            this.dragIconStrokeColor =
                settings.dragIconStrokeColor || this.dragIconStrokeColor;
            this.dragIconFillColor =
                settings.dragIconFillColor || this.dragIconFillColor;
        }
    }
}
//# sourceMappingURL=cropperDrawSettings.js.map