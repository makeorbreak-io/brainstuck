import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../Shared/Services/canvas.service';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C'], // or whatever colors you want
  };
  public curve: any = shape.curveLinear;


  public hierarchialGraph = {
    links: [  {
        source: 'start',
        target: '1',
        label: 'links to'
      }, {
        source: 'start',
        target: '2'
      },
    ],
    nodes: [  {
        id: 'start',
        label: 'start'
      }, {
        id: '1',
        label: 'Query ThreatConnect',
      }, {
        id: '2',
        label: 'Query XForce',
      }
    ],
  };

  constructor(public canvasService: CanvasService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const canvas = this.canvasService.getCanvas('test');
    console.log(canvas);
  }

}
