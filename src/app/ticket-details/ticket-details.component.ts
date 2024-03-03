import { Component, OnInit } from '@angular/core';
import { HelpDeskService } from '../services/helpdesk.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TicketModel } from '../models/ticket-model';

@Component({
  selector: 'app-ticket-details',
  standalone: true,
  imports: [],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent implements OnInit{
  
    constructor(
      private helpDeskService: HelpDeskService,
      private activatedRoute: ActivatedRoute
      ) {}

    paramsSubscription!: Subscription;
    ticket: TicketModel | null = null;

    ngOnInit(): void {

      this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
  
        const id = params['id'];
  
        this.helpDeskService.getTicket(id).subscribe(ticket => {
          this.ticket = ticket;
        });
  
      })
  
    }
}
