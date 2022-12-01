import { Component } from '@angular/core';
import { ColorPalletService } from 'src/app/services';

interface IBox {
  title: string;
  bgColor: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public readonly boxs: Array<IBox>;
  public constructor(private colorPallet: ColorPalletService) {
    this.boxs = [];
    const count = 6;
    for (let i = 0; i < count; i++) {
      let bx: IBox = {
        title: `${i + 1}`,
        bgColor: this.colorPallet.generateColor(i)
      };
      this.boxs.push(bx);
    }
  }


}
