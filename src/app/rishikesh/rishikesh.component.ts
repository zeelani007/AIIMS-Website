import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-rishikesh',
  templateUrl: './rishikesh.component.html',
  styleUrls: ['./rishikesh.component.css']
})
export class RishikeshComponent {
  _albums:any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 64; i++) {
      const src = '../../assets/gallary/img' + i + '.jpeg';
      const caption = 'Image ' + i;
      const thumb = '../../assets/gallary/img' + i + '.jpeg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
    }
  }
 
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  
  }
  
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
