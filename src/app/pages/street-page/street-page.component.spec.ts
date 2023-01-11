import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetPageComponent } from './street-page.component';

describe('StreetPageComponent', () => {
  let component: StreetPageComponent;
  let fixture: ComponentFixture<StreetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
