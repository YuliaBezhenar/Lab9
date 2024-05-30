import { Component } from '@angular/core';
import { TriangleMVVM } from './mvvm/model/triangleMVVM';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  triangle = new TriangleMVVM();
  area: number = 0;
  perimetr: number = 0;

  constructor() { }
  
  result(b: any, s: any) {
    this.triangle.base = parseFloat(b);
    this.triangle.side = parseFloat(s);
    this.area = this.triangle.area;
    this.perimetr = this.triangle.perimetr;
  }

}
