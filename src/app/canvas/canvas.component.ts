import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../Shared/Services/canvas.service';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  nodes = [
    {
      id: 'start',
      label: 'start'
    }, {
      id: '1',
      label: 'Query ThreatConnect',
    }, {
      id: '2',
      label: 'Query XForce',
    }, {
      id: '3',
      label: 'Format Results'
    }, {
      id: '4',
      label: 'Search Splunk'
    }, {
      id: '5',
      label: 'Block LDAP'
    }, {
      id: '6',
      label: 'Email Results'
    }
  ];

  links = [
    {
      source: 'start',
      target: '1',
      label: 'links to'
    }, {
      source: 'start',
      target: '2'
    }, {
      source: '1',
      target: '3',
      label: 'related to'
    }, {
      source: '2',
      target: '4'
    }, {
      source: '2',
      target: '6'
    }, {
      source: '3',
      target: '5'
    }
  ];

  constructor(public canvasService: CanvasService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const canvas = this.canvasService.getCanvas('test');
    console.log(canvas);
  }

}
