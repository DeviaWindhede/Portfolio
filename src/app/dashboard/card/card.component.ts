import { Component, Input, OnInit } from '@angular/core';
import { LazyImgDirective } from '../../lazy-img.directive';
import { RouterModule } from '@angular/router';
import { CardData } from '../../app-definitions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ LazyImgDirective, RouterModule, CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input({ required: true }) cardData!: CardData;

  imgSrc: string = "/assets/img/preview/";
  imgSrcSet: string = this.imgSrc;

  ngOnInit(): void {
    const initialPath: string = this.imgSrc + this.cardData.previewPath + "/responsive/preview";
    this.imgSrc += this.cardData.previewPath;
    
    if (this.cardData.isGif)
    {
      this.imgSrc += "/preview.gif";
      this.imgSrcSet = this.imgSrc;
      return;
    }

    this.imgSrc += "/preview.png";

    this.imgSrcSet = initialPath + "-xs.png 300w, ";
    this.imgSrcSet += initialPath + "-sm.png 480w, ";
    this.imgSrcSet += initialPath + "-sm2.png 375w";
  }
}
