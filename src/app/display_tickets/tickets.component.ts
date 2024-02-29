import { Component } from '@angular/core';
import { HelpDeskService } from '../services/helpdesk.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketModel } from '../models/ticket-model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  
  constructor(
    private helpDeskService: HelpDeskService,
    private router: Router) { }

  tickets$ = this.helpDeskService.getTickets();

  getTickets(id: number) {
    this.router.navigate(['ticket', id]);
  }

  deleteTicket(id: number) {

    this.helpDeskService.deleteTickets(id).subscribe(() => {
      this.tickets$ = this.helpDeskService.getTickets();
    })
  }

  updateTicket(id: number, ticket: TicketModel) {
    this.router.navigate(['update-ticket', id], { queryParams: ticket });
  }

}
