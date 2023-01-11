import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoCompComponent } from './contenido-comp.component';

describe('ContenidoCompComponent', () => {
  let component: ContenidoCompComponent;
  let fixture: ComponentFixture<ContenidoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
