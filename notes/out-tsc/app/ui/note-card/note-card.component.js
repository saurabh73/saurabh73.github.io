var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var NoteCardComponent = (function () {
    function NoteCardComponent() {
        this.noteTitle = '';
        this.noteColor = '#FFFFFF';
        this.createdAt = Date.now();
        this.doneButtonVisible = false;
        this.noteDelete = new EventEmitter();
    }
    NoteCardComponent.prototype.ngOnInit = function () {
    };
    NoteCardComponent.prototype.showDone = function () {
        this.doneButtonVisible = true;
    };
    NoteCardComponent.prototype.hideDone = function () {
        this.doneButtonVisible = false;
    };
    NoteCardComponent.prototype.deleteNote = function () {
        this.noteDelete.emit({ noteTitle: this.noteTitle });
    };
    __decorate([
        Input('title'), 
        __metadata('design:type', String)
    ], NoteCardComponent.prototype, "noteTitle", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], NoteCardComponent.prototype, "createdAt", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String)
    ], NoteCardComponent.prototype, "noteColor", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], NoteCardComponent.prototype, "noteDelete", void 0);
    NoteCardComponent = __decorate([
        Component({
            selector: 'note-card',
            templateUrl: './note-card.component.html',
            styleUrls: ['./note-card.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCardComponent);
    return NoteCardComponent;
}());
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-card/note-card.component.js.map