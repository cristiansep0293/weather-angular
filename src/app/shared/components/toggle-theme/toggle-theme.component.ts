import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss'
})
export class ToggleThemeComponent {
  @Output()
  public darkTheme: EventEmitter<Boolean>;
  @Input()
  public dark: Boolean;

  constructor(private formBuilder: FormBuilder) {
    this.darkTheme = new EventEmitter();
    this.dark = false;
  }

  public changeTheme():void {
    this.darkTheme.emit(this.dark);
  }

}
