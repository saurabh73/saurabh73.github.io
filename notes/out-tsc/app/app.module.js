var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './container/main-container.component';
import { MainComponent } from './container/main/main.component';
import { AppBarComponent } from './ui/app-bar/app-bar.component';
import { MaterialModule } from '@angular/material';
import { NoteCardComponent } from './ui/note-card/note-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoteCardContainerComponent } from './ui/note-card-container/note-card-container.component';
import { NoteInputContainerComponent } from './ui/note-input-container/note-input-container.component';
import { NoteInputComponent } from './ui/note-input/note-input.component';
import { NoteService } from './services/note-services.service';
import 'hammerjs';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                MainContainerComponent,
                MainComponent,
                AppBarComponent,
                NoteCardComponent,
                NoteCardContainerComponent,
                NoteInputContainerComponent,
                NoteInputComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
                MaterialModule.forRoot(),
                FlexLayoutModule
            ],
            providers: [NoteService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/app.module.js.map