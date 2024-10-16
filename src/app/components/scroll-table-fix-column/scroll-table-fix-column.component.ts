import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-scroll-table-fix-column',
  standalone: true,
  imports: [NgClass],
  templateUrl: './scroll-table-fix-column.component.html',
  styleUrl: './scroll-table-fix-column.component.scss'
})
export class ScrollTableFixColumnComponent {

  public isTableScrolled = signal<boolean>(false);

  onTableScroll(event: Event) {
    this.isTableScrolled.set((event.target as HTMLElement).scrollLeft > 0);
  }
}
