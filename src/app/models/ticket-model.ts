export interface TicketModel {
  Id: number,
  Ticket: number,
  Issue: string,
  OpenedBy: string,
  Date: Date,
  Status: boolean,
  ResolvedBy: string,
  Resolution: string
}

export interface BookmarkedTicketModel {
    Id: number,
    Ticket: number,
    BookMarkedBy: string,
    BookmarkedDate: Date,
}



