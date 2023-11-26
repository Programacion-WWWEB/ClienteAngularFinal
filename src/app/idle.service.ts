import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleService {

  private lastActivityTime = Date.now();
  private readonly idleTimeout = 60 * 60 * 1000;
  private isUserActiveSubject = new BehaviorSubject<boolean>(true);

  constructor() {
    this.initializeIdleTimeout();
  }

  private initializeIdleTimeout(): void {
    timer(0, 1000).pipe(
      tap(() => {
        const currentTime = Date.now();
        const timeSinceLastActivity = currentTime - this.lastActivityTime;

        if (timeSinceLastActivity >= this.idleTimeout) {
          this.isUserActiveSubject.next(false);
        }
      })
    ).subscribe();
  }

  resetIdleTimer(): void {
    this.lastActivityTime = Date.now();
    this.isUserActiveSubject.next(true);
  }

  isUserActive(): Observable<boolean> {
    return this.isUserActiveSubject.asObservable();
  }
}
