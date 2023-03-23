import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dragZone')
  public readonly dragZone: ElementRef<HTMLDivElement>;
  @ViewChild('dropZone')
  public readonly dropZone: ElementRef<HTMLDivElement>;
  public constructor(protected el: ElementRef) {

  }

  // public async ngOnInit(): Promise<void> {
  //   console.log(`dropZone:`, this.dropZone);
  // }

  public ngAfterViewInit() {
    // console.log(`dropZone:`, this.dropZone);

    // this.dropZone.nativeElement.addEventListener('dragover', (e) => {
    //   console.log(`ondragover:`);
    // });
  }
}
