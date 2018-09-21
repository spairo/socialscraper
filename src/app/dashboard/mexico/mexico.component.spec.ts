import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicoComponent } from './mexico.component';

describe('MexicoComponent', () => {
  let component: MexicoComponent;
  let fixture: ComponentFixture<MexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
