import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { customAlphabet } from 'nanoid/non-secure';

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  items: Array<string> = [];
  public constructor(protected el: ElementRef) {
    for (let idx = 0; idx < 5; idx++) {
      this.items.push(`${idx}`);
    }
  }

  test(): void {
    console.log(`el:`, this.el.nativeElement);
  }
}
