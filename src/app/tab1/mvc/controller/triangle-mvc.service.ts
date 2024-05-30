import { Injectable } from '@angular/core';
import { TriangleMVC } from '../model/TriangleMVC';

@Injectable({
  providedIn: 'root'
})
export class TriangleMvcService {
  triangles: TriangleMVC[] = [];

  constructor() { }

  add(base: number, side: number) {
    let t = new TriangleMVC(base, side);
    this.triangles.push(t);
  }
}
