import { Component } from '@angular/core';

@Component({
  selector: 'demo-one',
  styles: ['.demo-one {width:200px;height:200px;background-color: slateblue;color: #fff;}',
           '.demo-one:hover {cursor:pointer}'],
  template: `<div class="demo-one" [style.marginLeft.px]="x" [style.marginTop.px]="y"
    (panstart)="onPanStart($event)" (panmove)="onPan($event)">
    <div class="label">{{title}}</div>
    <div class="location">({{x}}, {{y}})</div>
  </div>`
})
export class DemoOne {
  public x: number = 0;
  public y: number = 0;
  public title = 'Drag Me!';

  private startX: number = 0;
  private startY: number = 0;

  onPanStart(event: any): void {
    this.startX = this.x;
    this.startY = this.y;
  }

  onPan(event: any): void {
    event.preventDefault();
    this.x = this.startX + event.deltaX;
    this.y = this.startY + event.deltaY;
  }
}
