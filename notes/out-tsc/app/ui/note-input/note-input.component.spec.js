import { async, TestBed } from '@angular/core/testing';
import { NoteInputComponent } from './note-input.component';
describe('NoteInputComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NoteInputComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NoteInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-input/note-input.component.spec.js.map