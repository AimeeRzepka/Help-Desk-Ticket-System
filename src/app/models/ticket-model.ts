export interface TicketModel {
  id: number,
  ticket: number,
  issue: string,
  openedBy: string,
  date: Date,
  status: boolean,
  resolvedBy: string,
  resolution: string
}

export interface BookmarkedTicketModel {
    Id: number,
    Ticket: number,
    BookMarkedBy: string,
    BookmarkedDate: Date,
}



