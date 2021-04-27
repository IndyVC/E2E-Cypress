import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugSettingsCommandsComponent } from './debug-settings-commands.component';

describe('DebugSettingsCommandsComponent', () => {
  let component: DebugSettingsCommandsComponent;
  let fixture: ComponentFixture<DebugSettingsCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugSettingsCommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugSettingsCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
