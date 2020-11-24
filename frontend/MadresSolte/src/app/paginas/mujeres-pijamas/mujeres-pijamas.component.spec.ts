import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MujeresPijamasComponent } from './mujeres-pijamas.component';

describe('MujeresPijamasComponent', () => {
  let component: MujeresPijamasComponent;
  let fixture: ComponentFixture<MujeresPijamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MujeresPijamasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MujeresPijamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
