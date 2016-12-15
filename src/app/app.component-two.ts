import { Component } from '@angular/core';

@Component({
  selector: 'demo-two',
  styles: ['.demo-two {width:200px;height:200px;background-color: lightgreen;color: #fff;}',
           '.demo-two:hover {cursor:pointer}'],
  template: `<div class="demo-two" dragmove [dX]="x" [dY]="y" (locationChange)="onPan($event)"
    [style.marginLeft.px]="x" [style.marginTop.px]="y">
    <div class="label">{{title}}</div>
    <div class="location">({{x}}, {{y}})</div>
  </div>`
})
export class DemoTwo {
  public x: number = 50;
  public y: number = 50;
  public title = 'Drag Me!';

  public onPan(event: any): void {
    this.x = event.x;
    this.y = event.y;
  }
}
