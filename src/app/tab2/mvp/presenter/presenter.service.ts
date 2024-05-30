import { Injectable } from '@angular/core';
import { TriangleMVP } from '../model/triangleMVP';
import { ITringleView } from '../view/ITriangleView';

@Injectable({
  providedIn: 'root'
})
export class PresenterService {

  triangle!: TriangleMVP;
  view!: ITringleView;
  loadTriangle(b: number, s: number, view: ITringleView) {
    this.view = view;
    this.triangle = new TriangleMVP(b, s);
    this.view.result = "Основа трикутника = " + this.triangle.base +
      ", бічні сторони: " + this.triangle.side + ", " + this.triangle.side +
      ". Площа: " + this.triangle.area.toFixed(2) +
      ". Периметр: " + this.triangle.perimetr;
  }

  constructor() { }
}
