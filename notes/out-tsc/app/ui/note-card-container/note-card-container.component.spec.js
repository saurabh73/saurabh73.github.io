import { async, TestBed } from '@angular/core/testing';
import { NoteCardContainerComponent } from './note-card-container.component';
describe('NoteCardContainerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NoteCardContainerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NoteCardContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-card-container/note-card-container.component.spec.js.map