import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementInteractionComponent } from './element-interaction.component';

describe('ElementInteractionComponent', () => {
  let component: ElementInteractionComponent;
  let fixture: ComponentFixture<ElementInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
