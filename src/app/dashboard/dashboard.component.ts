import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common'
import { CardComponent } from './card/card.component';
import { LazyImgDirective } from '../lazy-img.directive';
import { CardData } from '../app-definitions';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CardComponent,
    ContactComponent,
    AboutComponent,
    LazyImgDirective,
    CommonModule,
    RouterModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  cardData: CardData[] = [
    { name: "Vertex Painter with instanced rendering support using texture stored vertex colors", routerLink: "/vertex-painter", previewPath: "vertex-painter", isGif: true },
    { name: "Signature ECS using a static polymorphism optimization method", routerLink: "/ecs", previewPath: "ecs", isGif: false },
    { name: "Friendship Engine", routerLink: "/friendship-engine", previewPath: "friendship-engine", isGif: false },
    // { name: "Networked Kirby Airride Clone in Unity", routerLink: "/networked-kirby-airride", previewPath: "kirby-clone", isGif: false },
    { name: "sHitbox", routerLink: "/shitbox", previewPath: "shitbox", isGif: false }
  ];

  constructor(@Inject(DOCUMENT) private document: any, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(val => {
      const el: HTMLElement = this.document.querySelector('#' + val);
      el?.scrollIntoView();
    });
  }
}
