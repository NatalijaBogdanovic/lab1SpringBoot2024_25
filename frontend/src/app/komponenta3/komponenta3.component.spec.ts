import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponenta3Component } from './komponenta3.component';

describe('Komponenta3Component', () => {
  let component: Komponenta3Component;
  let fixture: ComponentFixture<Komponenta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Komponenta3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komponenta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
