import { Routes } from '@angular/router';
import { TicketsComponent } from './display_tickets/tickets.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { BookmarksComponent } from './display_bookmarks/bookmarks.component'
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

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
},
{
    path: 'bookmarks',
    component: BookmarksComponent
},
{
    path: 'ticket/:id',
    component: TicketDetailsComponent
},


];
