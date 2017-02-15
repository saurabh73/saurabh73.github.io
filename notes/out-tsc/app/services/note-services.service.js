var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/Rx';
export var NoteService = (function () {
    function NoteService() {
        this.emitter = new ReplaySubject(1);
        this.noteList = [
            {
                title: "This is first note",
                body: "Nullam pretium justo sed laoreet blandit. Integer enim magna, " +
                    "mattis id odio et, pellentesque fermentum.",
                createdAt: new Date(2017, 1, 17),
                noteColor: 'White'
            },
            {
                title: "This is second note",
                body: "Aenean maximus turpis magna, molestie hendrerit " +
                    "nibh facilisis et. Vestibulum elementum, ipsum eu iaculis vulputate.",
                createdAt: new Date(2017, 2, 11),
                noteColor: 'White'
            },
            {
                title: "This is first note",
                body: "Nullam pretium justo sed laoreet blandit. Integer enim magna, " +
                    "mattis id odio et, pellentesque fermentum.",
                createdAt: new Date(2017, 1, 17),
                noteColor: 'White'
            },
            {
                title: "This is second note",
                body: "Aenean maximus turpis magna, molestie hendrerit " +
                    "nibh facilisis et. Vestibulum elementum, ipsum eu iaculis vulputate.",
                createdAt: new Date(2017, 2, 11),
                noteColor: 'White'
            }
        ];
    }
    NoteService.prototype.fetchNoteList = function () {
        return this.noteList;
    };
    NoteService.prototype.addNote = function (note) {
        this.noteList.push(note);
        this.emitter.next(note);
    };
    NoteService.prototype.deleteNote = function (index) {
        this.noteList.splice(index, 1);
    };
    NoteService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], NoteService);
    return NoteService;
}());
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/services/note-services.service.js.map