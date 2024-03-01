import { Component, OnInit } from '@angular/core';
import { HelpDeskService } from '../services/helpdesk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent implements OnInit{

  constructor(
    private helpDeskService: HelpDeskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}


    id: null | number = null;
    ticket: number = 0;
    issue: string = '';
    openedBy: string = '';
    date: Date = new Date();
    status: string = ''; 
    resolvedBy: string = '';
    resolution: string = '';

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        // in case this component is being used to update a book instead
        if (params['id']) {
          this.id = params['id'];
  
          this.activatedRoute.queryParams.subscribe((queryParams) => {
            this.ticket = queryParams['ticket'];
            this.issue = queryParams['issue'];
            this.openedBy = queryParams['openedBy'];
            this.date = queryParams['date'];
            this.status = queryParams['status'];
            this.resolvedBy = queryParams['resolvedBy'];
            this.resolution = queryParams['resolution'];
          })
        }
      })
    }

    handleTicketSubmit() {
      if (this.id) {
        this.updateTicket();
      } else {
        this.addTicket();
      }
    }

    updateTicket() {
      const updatedTicket = {
        id: +this.id!,
        ticket: +this.ticket,
        issue: this.issue,
        openedBy: this.openedBy,
        date: this.date,
        status: this.status === 'true',
        resolvedBy: this.resolvedBy,
        resolution: this.resolution
      }

      this.helpDeskService.updateTickets(updatedTicket, this.id!).subscribe(() => {
        this.router.navigate(['tickets']);
      })
    }

    addTicket() {
      const newTicket = {
        ticket: +this.ticket,
        issue: this.issue,
        openedBy: this.openedBy,
        date: this.date,
        status: this.status === 'true',
        resolvedBy: this.resolvedBy,
        resolution: this.resolution
      }

      this.helpDeskService.addTicket(newTicket).subscribe(() => {
        this.router.navigate(['tickets']);
      })
    }


}
