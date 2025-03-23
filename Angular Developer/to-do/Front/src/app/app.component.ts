import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'to-do';

  showAlert() {
    alert('Button clicked!');
  }
}
