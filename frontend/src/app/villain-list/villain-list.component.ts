import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Villain } from '../villain.model';
import { tap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.scss'],
})
export class VillainListComponent implements OnInit, OnDestroy {
  dataSource = new MatTableDataSource<Villain>();
  villainsSubscription: Subscription;
  //villains$: Observable<Villain[]>;
  loadComplete: Date;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input()
  set villains(newVillains$: Observable<Villain[]>) {
    this.loadComplete = undefined;
    if (this.villainsSubscription) {
      this.villainsSubscription.unsubscribe();
    }
    this.villainsSubscription = newVillains$.subscribe((res) => {
      this.loadComplete = new Date();
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = ['villain', 'movie', 'actor', 'year'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.villainsSubscription) {
      this.villainsSubscription.unsubscribe();
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
