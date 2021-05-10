import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CommandTitle {
  title: string;
  subtitle: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommandTitleService {
  private _title = new BehaviorSubject<CommandTitle>({
    title: '',
    subtitle: '',
  });

  constructor() {}

  emit(title: string, subtitle: string) {
    this._title.next({ title, subtitle });
  }

  get title$() {
    return this._title.asObservable();
  }
}
