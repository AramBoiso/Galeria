import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  image_i = new Image("1", 
                    "Primera imagen", 
                    "esta es la primer imagen", 
                    "https://videotutoriales.com/maspa/maspa1.jpg",
                    "https://videotutoriales.com/maspa/maspa1-1.jpg");

  constructor() { }

  ngOnInit() {
  }

}
