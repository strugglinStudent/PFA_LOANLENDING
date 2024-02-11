import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderPopoverService {
  private detailSource$ = new BehaviorSubject(undefined);
  currentDetail: Observable<string> = this.detailSource$.asObservable();

  changeDetail(detail: string) {
    this.detailSource$.next(detail);
  }
}
