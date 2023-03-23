import { Component, ContentChildren, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent {

  @Input()
  public title: string;
  public constructor(protected el: ElementRef) {

  }

  public ngAfterViewInit() {

    this.el.nativeElement.addEventListener('dragover', (e: Event) => {
      // e.stopPropagation();
      console.log(`ondragover:`, this.title);
    });
  }

}
