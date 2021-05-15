import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  AddVillainComponent,
  AddVillainResult,
} from '../add-villain/add-villain.component';
import { Villain } from '../villain.model';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.scss'],
})
export class VillainCardComponent {
  villains$: Observable<Villain[]>;

  constructor(
    private villainService: VillainService,
    private dialog: MatDialog
  ) {
    this.quickReload();
  }

  quickReload() {
    this.villains$ = this.villainService.getVillains(0);
  }

  cacheReload() {
    this.villains$ = this.villainService.cachedVillains(5);
  }

  slowReload(delayReload: number) {
    this.villains$ = this.villainService.getVillains(delayReload);
  }

  backgroundRequest() {
    this.villainService.getVillains(0).subscribe();
  }

  addVillain(delay: number) {
    this.dialog
      .open(AddVillainComponent)
      .afterClosed()
      .subscribe((res: AddVillainResult) => {
        if (res.persist) {
          this.villainService
            .addVillain(res.villain, delay)
            .subscribe((res) => {
              this.villains$ = this.villainService.getVillains(delay);
            });
        }
      });
  }
}
