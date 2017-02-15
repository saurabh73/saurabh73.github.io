import { async, TestBed } from '@angular/core/testing';
import { NoteInputContainerComponent } from './note-input-container.component';
describe('NoteInputContainerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NoteInputContainerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NoteInputContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-input-container/note-input-container.component.spec.js.map