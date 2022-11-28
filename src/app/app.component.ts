import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faker } from '@faker-js/faker';

interface INavBar {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public readonly navBars: Array<INavBar>;
  public constructor() {
    // this.navBars = [];
    // for (let i = 0; i < 10; i++) {
    //   let nav: INavBar = {
    //     title: `${i}`,
    //     link: 'aaa'
    //   };
    //   this.navBars.push(nav);
    // }

    this.navBars = [
      {
        title: 'Home',
        link: '/home'
      },
      {
        title: 'Blank',
        link: '/blank'
      },
    ];
  }
}
