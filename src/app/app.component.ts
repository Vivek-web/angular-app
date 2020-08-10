import { ImageService } from './image.service';
import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-app';
  allimages: any[] = [];
  public source: string;

  constructor(private service: ImageService, private _lightbox: Lightbox) {

  }


  ngOnInit(): void {
    this.allimages = this.service.getimages();
  }

  open(path: string): void {
    this.source = path;
  }


  deleteimage(path, id) {

    this.allimages = this.allimages.filter(item => item.path !== path);

    this.allimages.push('')

  }

}
