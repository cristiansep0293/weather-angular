import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'weather-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input()
  public title:string;
  @Input()
  public dark: Boolean;
  @Output()
  public darkTheme: EventEmitter<Boolean>;
  @Output()
  public loadingEmit: EventEmitter<Boolean>;

  constructor() {
    this.title = '';
    this.dark = false;
    this.darkTheme = new EventEmitter();
    this.loadingEmit = new EventEmitter();
  }

  public changeTheme(dark: Boolean):void {
    this.dark = dark;
    this.darkTheme.emit(this.dark);
  }

  public isLoading(loading: Boolean): void {
    this.loadingEmit.emit(loading);
  }

}
