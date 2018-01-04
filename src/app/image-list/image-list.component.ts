import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../models/image';

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
images:Array<Image> = [
         new Image("1","Imagen 1","Esta es la imagen 1","https://videotutoriales.com/maspa/maspa1.jpg","https://videotutoriales.com/maspa/maspa1-1.jpg"),
         new Image("2","Imagen 2","Esta es la imagen 2","https://videotutoriales.com/maspa/maspa2.jpg","https://videotutoriales.com/maspa/maspa2-1.jpg"),
         new Image("3","Imagen 3","Esta es la imagen 3","https://videotutoriales.com/maspa/maspa3.jpg","https://videotutoriales.com/maspa/maspa3-1.jpg"),
         new Image("4","Imagen 4","Esta es la imagen 4","https://videotutoriales.com/maspa/maspa4.jpg","https://videotutoriales.com/maspa/maspa4-1.jpg"),
         new Image("5","Imagen 5","Esta es la imagen 5","https://videotutoriales.com/maspa/maspa5.jpg","https://videotutoriales.com/maspa/maspa5-1.jpg"),
         new Image("6","Imagen 6","Esta es la imagen 6","https://videotutoriales.com/maspa/maspa6.jpg","https://videotutoriales.com/maspa/maspa6-1.jpg"),
         new Image("7","Imagen 7","Esta es la imagen 7","https://videotutoriales.com/maspa/maspa7.jpg","https://videotutoriales.com/maspa/maspa7-1.jpg"),
         new Image("8","Imagen 8","Esta es la imagen 8","https://videotutoriales.com/maspa/maspa8.jpg","https://videotutoriales.com/maspa/maspa8-1.jpg"),
]; 

  /*
  image_i = new Image("1", 
                    "Primera imagen", 
                    "esta es la primer imagen", 
                    "https://videotutoriales.com/maspa/maspa1.jpg",
                    "https://videotutoriales.com/maspa/maspa1-1.jpg");
*/
  constructor() { }

  ngOnInit() {
  }

}
