import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
 allimages = [];

  constructor() { }

 getimages(){
   return this.allimages = Imagesdelatils.slice(0);
 } 

}
const Imagesdelatils = [    
  { "id": 1, "path":"assets/images/braincreativityart.jpg" },    
  { "id": 2, "path":"assets/images/rsz_creative-ideas.jpg" },    
  { "id": 3, "path":"assets/images/creative.jpg" },    
  { "id": 4, "path":"assets/images/creativity_0.jpg" },    
  { "id": 5, "path":"assets/images/people.png" },    
  { "id": 6, "path":"assets/images/rsz_1mindfulness.jpg" }
]
