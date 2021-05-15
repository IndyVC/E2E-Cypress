import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandTitleService } from '../command-title.service';
import { TestSourceCodeService } from '../test-source-code.service';

declare var require: any; // Make ts compiler accept require calls
const testCode = require('!raw-loader!../../../../../e2e/cypress/integration/commands/04-debugging-and-settings-commands.spec.js');

@Component({
  selector: 'app-debug-settings-commands',
  templateUrl: './debug-settings-commands.component.html',
  styleUrls: ['./debug-settings-commands.component.scss'],
})
export class DebugSettingsCommandsComponent implements OnInit {
  code: string;
  command: string;

  constructor(
    private commandTitle: CommandTitleService,
    route: ActivatedRoute,
    private testSourceCode: TestSourceCodeService
  ) {
    this.command = route.snapshot.paramMap.get('command');
    let commandPrefix = 'cy.';
    if (this.command === 'config' || this.command === 'env') {
      commandPrefix = 'Cypress.';
    }
    this.commandTitle.emit(
      'Debugging and settings commands',
      commandPrefix + this.command
    );
    this.testSourceCode.emit(testCode.default, this.command);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.testSourceCode.clear();
  }
}
