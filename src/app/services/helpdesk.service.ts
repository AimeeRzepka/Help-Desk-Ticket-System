import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { TicketModel } from '../models/ticket-model';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = `${environment.apiDomain}/api/HelpDesk`;

  getTickets() {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.get<TicketModel[]>(this.baseUrl)
  }

}
