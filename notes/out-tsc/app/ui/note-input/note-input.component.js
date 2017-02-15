var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoteService } from '../../services/note-services.service';
export var NoteInputComponent = (function () {
    function NoteInputComponent(formBuilder, noteService) {
        this._defaultNoteColor = '#FFFFFF';
        this._emptyString = '';
        this.isFormVisible = false;
        this.isColorBoxVisible = false;
        this.selectedColor = this._defaultNoteColor;
        this.colors = [this._defaultNoteColor, '#C5F7EB', '#C5CEF7', '#EEC5F7', '#E8F7C5', '#F7D1C5', '#F7E8C5', '#F7F2C5'];
        this.addNewNote = new EventEmitter();
        this.noteService = noteService;
        this.form = formBuilder.group({
            "title": [this._emptyString, null],
            "body": [this._emptyString, null]
        });
    }
    NoteInputComponent.prototype.ngOnInit = function () {
    };
    NoteInputComponent.prototype.displayForm = function () {
        this.isFormVisible = true;
    };
    NoteInputComponent.prototype.addNote = function () {
        if (this.form.value.title !== this._emptyString && this.form.value.body !== this._emptyString) {
            var note = {
                title: this.form.value.title,
                body: this.form.value.body,
                noteColor: this.selectedColor,
                createdAt: new Date()
            };
            this.noteService.addNote(note);
            this.form.reset();
            this.isFormVisible = false;
            this.selectedColor = this._defaultNoteColor;
        }
    };
    NoteInputComponent.prototype.selectNoteColor = function (color) {
        this.selectedColor = color;
        this.isColorBoxVisible = false;
    };
    NoteInputComponent.prototype.displayColorPicker = function () {
        this.isColorBoxVisible = true;
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], NoteInputComponent.prototype, "addNewNote", void 0);
    NoteInputComponent = __decorate([
        Component({
            selector: 'note-input',
            templateUrl: './note-input.component.html',
            styleUrls: ['./note-input.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, NoteService])
    ], NoteInputComponent);
    return NoteInputComponent;
}());
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-input/note-input.component.js.map