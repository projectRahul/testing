import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


import { VidlibComponent } from 'vidlib/lib/vidlib.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  
  constructor() { }

  ngOnInit() {

  	this.galleryOptions = [
        {
            width: '100%',
            height: '600px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: 'assets/gallery/1.jpg',
            medium: 'assets/gallery/1.jpg',
            big: 'assets/gallery/1.jpg'
        },
        {
            small: 'assets/gallery/2.jpg',
            medium: 'assets/gallery/2.jpg',
            big: 'assets/gallery/2.jpg'
        },
        {
            small: 'assets/gallery/3.jpg',
            medium: 'assets/gallery/3.jpg',
            big: 'assets/gallery/3.jpg'
        },
        {
            small: 'assets/gallery/3.mp4',
            medium: 'assets/gallery/3.mp4',
            big: 'assets/gallery/3.mp4'
        }
    ];
  }

}
