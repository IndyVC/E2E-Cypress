import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface TestSourceCode {
  code: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestSourceCodeService {
  private _code = new BehaviorSubject<TestSourceCode>({ code: '' });

  constructor() {}

  emit(testCode: string, commandName: string) {
    let lines = testCode
      .split('\n')
      .filter((line) => line.indexOf('waitForHighlight') === -1)
      .map((line) => (line.trim().length === 0 ? '' : line));
    let start = lines.findIndex((line) =>
      line.trim().startsWith(`it("${commandName}"`)
    );
    let end = lines.indexOf('', start);
    if (start === -1 || end === -1) {
      throw new Error(
        'Cannot find test code snippet for command ' + commandName
      );
    }
    let snippet = lines.splice(start, end - start).join('\n');
    this._code.next({ code: snippet });
  }

  clear() {
    this._code.next({ code: '' });
  }

  get code$() {
    return this._code.asObservable();
  }
}
