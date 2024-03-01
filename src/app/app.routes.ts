import { Routes } from '@angular/router';
import { TicketsComponent } from './display_tickets/tickets.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

export const routes: Routes = [{
    path: 'tickets',
    component: TicketsComponent
},
{
    path: 'add-ticket',
    component: AddTicketComponent
},
{
    path: 'update-ticket/:id',
    component: AddTicketComponent
}

];
