import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BookmarkedTicketModel, PostBookmarkedTicketModel } from '../models/ticket-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/Bookmark`;

  addBookmark(bookmarkTicket: PostBookmarkedTicketModel): Observable<BookmarkedTicketModel> {
    return this.httpClient.post<BookmarkedTicketModel>(this.baseUrl, bookmarkTicket); 
  }

  getBookmarks() {
    return this.httpClient.get<BookmarkedTicketModel[]>(this.baseUrl);
  }
}
