import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  phoneNumber: string = "(+46)709422659";

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.phoneNumber);
    alert("Copied to clipboard! This will be replaced with a popup in the browser");
  }
}
