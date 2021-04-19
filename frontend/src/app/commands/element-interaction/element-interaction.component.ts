import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandTitleService } from '../command-title.service';
import { TestSourceCodeService } from '../test-source-code.service';

declare var require: any; // Make ts compiler accept require calls
const testCode = require('!raw-loader!../../../../../e2e/cypress/integration/element-interaction-commands.spec.js');

@Component({
  selector: 'app-element-interaction',
  templateUrl: './element-interaction.component.html',
  styleUrls: ['./element-interaction.component.scss'],
})
export class ElementInteractionComponent implements OnInit {
  command: string;
  shortcut = 0;

  foods = [
    { viewValue: 'Fish & chips', value: 1 },
    { viewValue: 'Steak & fries', value: 2 },
    { viewValue: 'Pizza', value: 3 },
  ];

  constructor(
    private commandTitle: CommandTitleService,
    route: ActivatedRoute,
    private testSourceCode: TestSourceCodeService
  ) {
    this.command = route.snapshot.paramMap.get('command');
    this.commandTitle.emit(
      'Element interaction commands',
      'cy.' + this.command
    );
    this.testSourceCode.emit(testCode.default, this.command);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.testSourceCode.clear();
  }

  @HostListener('window:keydown.control.y', ['$event'])
  shortcutPress(event: KeyboardEvent) {
    event.preventDefault();
    this.shortcut++;
  }
}
