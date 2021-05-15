import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VillainService } from 'src/app/villain.service';
import { CommandTitleService } from '../command-title.service';
import { TestSourceCodeService } from '../test-source-code.service';

declare var require: any; // Make ts compiler accept require calls
const testCode = require('!raw-loader!../../../../../e2e/cypress/integration/commands/03-http-request-commands.spec.js');

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss'],
})
export class HttpRequestComponent implements OnInit, OnDestroy {
  code: string;
  command: string;
  formGroup: FormGroup;

  constructor(
    private commandTitle: CommandTitleService,
    route: ActivatedRoute,
    private testSourceCode: TestSourceCodeService,
    formBuilder: FormBuilder,
    private villainService: VillainService
  ) {
    this.command = route.snapshot.paramMap.get('command');
    let commandSubtitle = 'cy.' + this.command;
    if (this.command === 'Slow API fails') {
      commandSubtitle = this.command;
    }
    this.commandTitle.emit('HTTP request commands', commandSubtitle);
    this.testSourceCode.emit(testCode.default, this.command);
    this.formGroup = formBuilder.group({
      villainsCount: [null],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.testSourceCode.clear();
  }

  loadVillains() {
    this.villainService.getVillains(4500).subscribe((data) => {
      this.formGroup.controls.villainsCount.patchValue(data.length);
    });
  }
}
