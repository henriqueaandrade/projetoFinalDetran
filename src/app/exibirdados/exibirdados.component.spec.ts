import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirdadosComponent } from './exibirdados.component';

describe('ExibirdadosComponent', () => {
  let component: ExibirdadosComponent;
  let fixture: ComponentFixture<ExibirdadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirdadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirdadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
