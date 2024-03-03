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

export interface PostTicketModel {
  ticket: number,
  issue: string,
  openedBy: string,
  date: Date,
  status: boolean,
  resolvedBy: string,
  resolution: string
}

export interface BookmarkedTicketModel {
    id: number,
    ticketId: number,
    markedBy: string,
    markedDate: Date,
}   

export interface PostBookmarkedTicketModel {
  ticketId: number,
  markedBy: string,
  markedDate: Date, 
}



