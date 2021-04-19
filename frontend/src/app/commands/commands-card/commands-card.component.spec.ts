import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsCardComponent } from './commands-card.component';

describe('CommandsCardComponent', () => {
  let component: CommandsCardComponent;
  let fixture: ComponentFixture<CommandsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
