import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponenta1Component } from './komponenta1.component';

describe('Komponenta1Component', () => {
  let component: Komponenta1Component;
  let fixture: ComponentFixture<Komponenta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Komponenta1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komponenta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
