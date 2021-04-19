import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandTitleService } from '../command-title.service';
import { TestSourceCodeService } from '../test-source-code.service';

declare var require: any; // Make ts compiler accept require calls
const testCode = require('!raw-loader!../../../../../e2e/cypress/integration/basic-commands.spec.js');

@Component({
  selector: 'app-basic-commands',
  templateUrl: './basic-commands.component.html',
  styleUrls: ['./basic-commands.component.scss'],
})
export class BasicCommandsComponent implements OnInit, OnDestroy {
  code: string;
  command: string;
  snail = false;

  constructor(
    private commandTitle: CommandTitleService,
    route: ActivatedRoute,
    private testSourceCode: TestSourceCodeService
  ) {
    this.command = route.snapshot.paramMap.get('command');
    this.commandTitle.emit('Basic commands', 'cy.' + this.command);
    this.testSourceCode.emit(testCode.default, this.command);
    if (this.command === 'get') {
      setTimeout(() => (this.snail = true), 1000);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.testSourceCode.clear();
  }
}
