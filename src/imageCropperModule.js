import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageCropperComponent } from "./imageCropperComponent";
export class ImageCropperModule {
}
ImageCropperModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ImageCropperComponent],
                exports: [ImageCropperComponent]
            },] },
];
//# sourceMappingURL=imageCropperModule.js.map