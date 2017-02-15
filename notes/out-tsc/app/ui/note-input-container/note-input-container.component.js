var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var NoteInputContainerComponent = (function () {
    function NoteInputContainerComponent() {
        this.flexLayoutProp = {
            layout: 'row',
            layoutAlign: {
                normal: 'center center',
                xs: 'start'
            }
        };
    }
    NoteInputContainerComponent.prototype.ngOnInit = function () {
    };
    NoteInputContainerComponent = __decorate([
        Component({
            selector: 'note-input-container',
            template: "\n    <div  [fxLayout]=\"flexLayoutProp.layout\" \n          [fxLayoutAlign]=\"flexLayoutProp.layoutAlign.normal\" \n          [fxLayoutAlign.xs]=\"flexLayoutProp.layoutAlign.xs\">\n      <note-input [fxFlex]=\"'60'\" [fxFlex.sm]=\"'100'\" [fxFlex.xs]=\"'100'\"></note-input>\n    </div>\n  ",
            styles: ["\n    note-input{\n      padding: 40px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NoteInputContainerComponent);
    return NoteInputContainerComponent;
}());
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-input-container/note-input-container.component.js.map