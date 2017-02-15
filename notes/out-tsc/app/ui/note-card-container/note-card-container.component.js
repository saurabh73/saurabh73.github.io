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
import { NoteService } from '../../services/note-services.service';
export var NoteCardContainerComponent = (function () {
    function NoteCardContainerComponent(noteService) {
        this.flexLayoutProp = {
            defaultLayout: "row",
            mobileLayout: "column",
            wrapType: "wrap",
            layoutAlign: "start"
        };
        this.noteService = noteService;
    }
    NoteCardContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notesList = this.noteService.fetchNoteList().slice();
        this.noteService.emitter.subscribe(function (data) {
            console.log("Subscription Data Received");
            _this.notesList.push(data);
        });
    };
    NoteCardContainerComponent.prototype.ngOnDestroy = function () {
    };
    NoteCardContainerComponent.prototype.deleteNote = function (index) {
        this.notesList.splice(index, 1);
        this.noteService.deleteNote(index);
    };
    NoteCardContainerComponent = __decorate([
        Component({
            selector: 'note-card-container',
            template: "\n    <note-input-container ></note-input-container>\n    <div [fxLayout]=\"flexLayoutProp.defaultLayout\" [fxLayout.xs]=\"flexLayoutProp.mobileLayout\"\n     [fxLayoutWrap]=\"flexLayoutProp.wrapType\" [fxLayoutAlign]=\"flexLayoutProp.layoutAlign\">\n     \n      <note-card *ngFor=\"let note of notesList, let idx = index\" \n                 [title]=\"note.title\" \n                 [createdAt]=\"note.createdAt\"\n                 [fxFlex]=\"'25'\" \n                 [fxFlex.sm]=\"'50'\"\n                 [noteColor]=\"note.noteColor\"\n                 (noteDelete)=\"deleteNote(idx)\">\n        {{note.body}}\n      </note-card>\n     </div>\n  ",
            styles: ["\n    note-card {\n      padding:10px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [NoteService])
    ], NoteCardContainerComponent);
    return NoteCardContainerComponent;
}());
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-card-container/note-card-container.component.js.map