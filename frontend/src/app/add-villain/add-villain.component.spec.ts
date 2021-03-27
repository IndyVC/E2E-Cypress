import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillainComponent } from './add-villain.component';

describe('AddVillainComponent', () => {
  let component: AddVillainComponent;
  let fixture: ComponentFixture<AddVillainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVillainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVillainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
