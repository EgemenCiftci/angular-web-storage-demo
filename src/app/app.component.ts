import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _someTextName = 'someText';

  get someText(): string {
    return localStorage.getItem(this._someTextName);
  }

  set someText(val: string) {
    localStorage.setItem(this._someTextName, val);
  }

  @HostListener('window:storage', ['$event'])
  onStorage(event: StorageEvent) {
    console.log(event);
    this.someText = localStorage.getItem(this._someTextName);
  }
}
