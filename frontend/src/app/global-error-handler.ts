import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorDialogComponent } from "./error-dialog/error-dialog.component";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private dialog: MatDialog, private zone: NgZone) {}

  handleError(error: Error) {

    this.zone.run(() =>
      this.dialog.open(ErrorDialogComponent, {
        minHeight: "300px",
        data: error
      }));

    console.error("Error from global error handler", error);
  }
}
