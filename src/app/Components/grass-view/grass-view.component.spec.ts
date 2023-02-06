import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrassViewComponent } from './grass-view.component';

describe('GrassViewComponent', () => {
  let component: GrassViewComponent;
  let fixture: ComponentFixture<GrassViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrassViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
