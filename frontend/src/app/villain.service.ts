import { Injectable } from '@angular/core';
import { Villain } from './villain.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VillainService {
  villainsCache: Villain[] = [];
  private url = 'http://localhost:4300/api/';

  constructor(private httpClient: HttpClient) {}

  getVillains(delay: number): Observable<Villain[]> {
    return this.loadVillains(delay);
  }

  cachedVillains(count: number): Observable<Villain[]> {
    return of(this.villainsCache.slice(0, count));
  }

  addVillain(villain: Villain, delay: number): Observable<any> {
    return this.httpClient.post(this.url + delay, villain, {
      responseType: 'text',
    });
  }

  private loadVillains(delay: number) {
    return this.httpClient
      .get<Villain[]>(this.url + delay)
      .pipe(tap((villains) => (this.villainsCache = villains)));
  }

  private shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
