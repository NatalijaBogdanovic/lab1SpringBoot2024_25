import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponenta2Component } from './komponenta2.component';

describe('Komponenta2Component', () => {
  let component: Komponenta2Component;
  let fixture: ComponentFixture<Komponenta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Komponenta2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Komponenta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
