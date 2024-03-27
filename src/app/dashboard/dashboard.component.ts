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
    { name: "Vertex Painter with instanced rendering support using texture stored vertex colors", routerLink: "/vertex-painter", previewPath: "vertex-painter" },
    { name: "Signature ECS with optimizations using CRTP", routerLink: "/ecs", previewPath: "ecs" },
    { name: "Friendship Engine", routerLink: "/friendship-engine", previewPath: "friendship-engine" }
  ];

  // temp: GameProject = 
  // { 
  //   name: "Test Name",
  //   genre: "Genre Name",
  //   time: 160,
  //   team: {
  //     programmers: 1,
  //     artists: 2,
  //     designers: 3
  //   },
  //   engine: "Engine Name",
  //   imagePath: "place-holde",
  //   contributions: [
  //     "Point 1",
  //     "Point 2",
  //     "Point 3"
  //   ]
  // };



    // On the Goose!
    // SPITE: Mask of Brigitte
    // B-DAY 1947
    // Aeon's Adventure: Distorted Time
    // Dissonance
    // Slothomancer
    // Squid Heist





  // heroes: Hero[] = [];

  // constructor(private heroService: HeroService) { }

  constructor(@Inject(DOCUMENT) private document: any, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(val => {
      const el: HTMLElement = this.document.querySelector('#' + val);
      el?.scrollIntoView();
    });
  }
}
