import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-card',
  imports: [ButtonModule, CheckboxModule, CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  providers: [CookieService],
  standalone: true,
})
export class CardComponent {
  filter: 'all' | 'active' | 'done' = 'all';

  allItems = new Array();

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (description != '' && description.length < 200)
      this.allItems.push({
        id: Date.now(),
        description,
        done: false,
      });
  }

  deleteItem(item: any) {
    this.allItems = this.allItems.filter((i) => i.id !== item.id);
  }

  updateItem(item: any) {
    const newDescription = prompt('edit task:', item.description);
    if (newDescription !== null && newDescription.trim()) {
      item.description = newDescription.trim();
    }
  }

  toggleDone(item: any) {
    item.done = !item.done;
  }
}
