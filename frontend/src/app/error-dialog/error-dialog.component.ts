import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  error: HttpErrorResponse;

  get ErrorMessage() {
    return this.error?.statusText ?? this.error?.message;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.error = data;
  }

  ngOnInit(): void {
  }

}
