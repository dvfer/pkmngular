import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturesViewComponent } from './captures-view.component';

describe('CapturesViewComponent', () => {
  let component: CapturesViewComponent;
  let fixture: ComponentFixture<CapturesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapturesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
