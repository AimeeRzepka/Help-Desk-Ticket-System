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
    ticket: number,
    bookMarkedBy: string,
    bookmarkedDate: Date,
}



