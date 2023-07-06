import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  _albums:any = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 6; i++) {
      const src = '../../assets/Events/img' + i + '.jpg';
      const caption = 'Image ' + i;
      const thumb = '../../assets/Events/img' + i + '.jpg';
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
