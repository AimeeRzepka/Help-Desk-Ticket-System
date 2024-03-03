import { Component } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.css'
})

export class BookmarksComponent {
  
  constructor(
    private bookmarkService: BookmarksService) { }

  bookmarks$ = this.bookmarkService.getBookmarks();
  
}
