import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxCompComponent } from './toolbox-comp.component';

describe('ToolboxCompComponent', () => {
  let component: ToolboxCompComponent;
  let fixture: ComponentFixture<ToolboxCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolboxCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolboxCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
