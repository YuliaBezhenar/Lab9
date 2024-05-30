import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TriangleMvcService } from '../../controller/triangle-mvc.service';

@Component({
  selector: 'app-triangle-view',
  templateUrl: './triangle-view.component.html',
  styleUrls: ['./triangle-view.component.scss'],
})
export class TriangleViewComponent implements OnInit {
  triangleForm!: FormGroup;
  triangles!: any[];
  constructor(private triangleService: TriangleMvcService,
    private fb: FormBuilder
  ) { 
    this.triangleForm = this.fb.group({
      b: ['4', [Validators.required, Validators.min(1)]],
      s: ['3', [Validators.required, Validators.min(1)]],
    })
  }

  ngOnInit() { }
  add(triangleForm: any) {
    this.triangleService.add(parseFloat(triangleForm.b), parseFloat(triangleForm.s));
    this.triangles = this.triangleService.triangles;
  }


}

