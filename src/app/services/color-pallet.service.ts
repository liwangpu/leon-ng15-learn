import { Injectable } from '@angular/core';

const COLOR_PALLET_MAP_STORAGEKEY = 'color-pallet-map';

@Injectable({
  providedIn: 'root'
})
export class ColorPalletService {

  private readonly colorMap = new Map<number, string>();
  public constructor() {
    const cacheColorStr = localStorage.getItem(COLOR_PALLET_MAP_STORAGEKEY);
    if (!cacheColorStr) {
      const cache = {};
      for (let i = 0; i < 10; i++) {
        const color = this._generateColor(i);
        this.colorMap.set(i, color);
        cache[`${i}`] = color;
      }
      localStorage.setItem(COLOR_PALLET_MAP_STORAGEKEY, JSON.stringify(cache));
    } else {
      const cacheColorObj = JSON.parse(cacheColorStr);
      const keys = Object.keys(cacheColorObj);
      keys.forEach(indexStr => {
        this.colorMap.set(Number.parseInt(indexStr), cacheColorObj[indexStr]);
      });
    }
  }

  public generateColor(index: number): string {
    const remainder = index % 10;
    return this.colorMap.get(remainder);
  }

  private _generateColor(index: number): string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
