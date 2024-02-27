import { Component } from '@angular/core';
import { HelpDeskService } from '../services/helpdesk.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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

}
