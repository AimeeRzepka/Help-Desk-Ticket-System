import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { PostTicketModel, TicketModel } from '../models/ticket-model';
import { Observable } from 'rxjs';

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

  updateTickets(updatedTicket: TicketModel, id: number | null) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.put(`${this.baseUrl}/${id}`, updatedTicket);
  }

  deleteTickets(id: number) {
    // httpClient.get means this method will be making an http GET request!
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  addTicket(newTicket: PostTicketModel): Observable<TicketModel> {
    return this.httpClient.post<TicketModel>(this.baseUrl, newTicket);
  }

}
