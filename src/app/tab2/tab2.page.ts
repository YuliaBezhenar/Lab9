import { Component } from '@angular/core';
import { ITringleView } from './mvp/view/ITriangleView';
import { PresenterService } from './mvp/presenter/presenter.service';
import { triangleView } from './mvp/view/triangleView';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  view!: ITringleView;

  constructor(private pr: PresenterService) {
    this.view = new triangleView();
  }

  result(b: any, s: any) {
    this.pr.loadTriangle(parseFloat(b), parseFloat(s), this.view);
  }

}
