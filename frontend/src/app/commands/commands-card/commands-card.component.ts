import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommandTitle, CommandTitleService } from '../command-title.service';
import {
  TestSourceCode,
  TestSourceCodeService,
} from '../test-source-code.service';


declare var require: any; // Make ts compiler accept require calls
const hljs = require('highlight.js');

@Component({
  selector: 'app-commands-card',
  templateUrl: './commands-card.component.html',
  styleUrls: ['./commands-card.component.scss'],
})
export class CommandsCardComponent implements OnInit {
  title$: Observable<CommandTitle>;
  code$: Observable<TestSourceCode>;
  subscriptions = new Subscription();
  highlightDone = false;

  constructor(
    commandTitle: CommandTitleService,
    testSourceCode: TestSourceCodeService
  ) {
    this.title$ = commandTitle.title$;
    this.code$ = testSourceCode.code$.pipe(
      tap((code) => {
        this.highlightDone = false;
        hljs.highlightAll();
        console.log('got code', code);
      })
    );
  }

  ngOnInit(): void {}

  highlighted() {
    this.highlightDone = true;
  }
}
