import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchVisibleSubject = new BehaviorSubject<boolean>(false);
  private searchTermSubject = new BehaviorSubject<string>('');

  searchVisible$ = this.searchVisibleSubject.asObservable();
  searchTerm$ = this.searchTermSubject.asObservable();

  setSearchVisible(visible: boolean): void {
    this.searchVisibleSubject.next(visible);
  }

  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  resetSearch(): void {
    this.searchVisibleSubject.next(false);
    this.searchTermSubject.next('');
  }
}