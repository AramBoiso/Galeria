import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../models/image';

@Component({
  selector: 'ng-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {

  @Input() selectedImage:Image;

  constructor() { }



}
