import { async, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
describe('MainComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MainComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/workspace/Angular2/Angular2-learning/notes/src/app/container/main/main.component.spec.js.map