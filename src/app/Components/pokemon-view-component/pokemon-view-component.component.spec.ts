import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonViewComponentComponent } from './pokemon-view-component.component';

describe('PokemonViewComponentComponent', () => {
  let component: PokemonViewComponentComponent;
  let fixture: ComponentFixture<PokemonViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
