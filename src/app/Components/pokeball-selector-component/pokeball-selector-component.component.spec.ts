import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballSelectorComponentComponent } from './pokeball-selector-component.component';

describe('PokeballSelectorComponentComponent', () => {
  let component: PokeballSelectorComponentComponent;
  let fixture: ComponentFixture<PokeballSelectorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeballSelectorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeballSelectorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
