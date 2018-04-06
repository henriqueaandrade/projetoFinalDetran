import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultadadosComponent } from './consultadados.component';

describe('ConsultadadosComponent', () => {
  let component: ConsultadadosComponent;
  let fixture: ComponentFixture<ConsultadadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultadadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultadadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
