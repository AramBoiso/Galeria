import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../models/image';
import {ImageService} from '../../services/image.service'

@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {

  images:Array<Image> = [];
  selectedImage:Image;

  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages();
    console.log(this.images[0].id);
  }

  onSelected(image:Image){
    this.selectedImage = image;
  }

}
