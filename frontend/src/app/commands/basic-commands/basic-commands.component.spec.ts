import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCommandsComponent } from './basic-commands.component';

describe('BasicCommandsComponent', () => {
  let component: BasicCommandsComponent;
  let fixture: ComponentFixture<BasicCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
