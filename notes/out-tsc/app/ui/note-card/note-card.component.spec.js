import { async, TestBed } from '@angular/core/testing';
import { NoteCardComponent } from './note-card.component';
describe('NoteCardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NoteCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NoteCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/ui/note-card/note-card.component.spec.js.map