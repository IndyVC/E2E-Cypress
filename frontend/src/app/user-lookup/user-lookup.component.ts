import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface UserInfo {
  user: string;
  fullName: string;
}

@Component({
  selector: 'app-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.scss'],
})
export class UserLookupComponent implements OnInit {
  private url = 'http://localhost:4300/user/';

  userInfo$: Observable<UserInfo>;
  error: string;
  userNameControl = new FormControl('', [Validators.required]);

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  lookup() {
    this.error = undefined;
    this.userInfo$ = this.httpClient
      .get<UserInfo>(this.url + this.userNameControl.value)
      .pipe(
        catchError((err) => {
          this.error = err.message;
          return of(null);
        })
      );
  }
}
