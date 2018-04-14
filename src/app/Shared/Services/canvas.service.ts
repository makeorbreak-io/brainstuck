import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscribe } from '@firebase/util';

export interface Canvas {
  name: string;
  nodes: Array<string>;
  links: Array<Links>;
}

export interface Links {
  Node1: string;
  Node2: string;
}

export interface CanvasNGX {
  links: Array<LinksNGX>;
  nodes: Array<NodesNGX>;
}

export interface LinksNGX {
  source: string;
  target: string;
}

export interface NodesNGX {
  id: string;
  label: string;
}

@Injectable()
export class CanvasService {
  public canvasList: AngularFirestoreDocument<Canvas[]>;
  canvas: Observable<any[]>;

  public afs: AngularFirestoreCollection<Canvas>;

  constructor(public db: AngularFirestore) {}

  getCanvas(name: string): Observable<any> {
    return this.afs
      .doc('canvas')
      .collection('items', ref => ref.where('name', '==', name).limit(1))
      .valueChanges();
  }

  converterToGraph(canvas: Canvas): CanvasNGX {
    const nodes: Array<NodesNGX> = [];
    let links: Array<LinksNGX> = [];
    const canvasNGX: CanvasNGX = { nodes, links };

    for (const name of canvas.nodes) {
      nodes.push({ id: name, label: name });
    }

    for (const link of canvas.links) {
      links.push({ source: link.Node1, target: link.Node2 });
    }

    return canvasNGX;
  }

  addCanvas(canvas: Canvas) {
    this.afs.add(canvas);
  }
}
