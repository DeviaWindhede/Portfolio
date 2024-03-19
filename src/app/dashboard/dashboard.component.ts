import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CardComponent } from './card/card.component';
import { LazyImgDirective } from '../lazy-img.directive';
import { CardData } from '../app-definitions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, LazyImgDirective, CommonModule, RouterModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  cardData: CardData[] = [
    { name: "Vertex Painter", routerLink: "/vertex-painter", previewPath: "vertex-painter" },
    { name: "Signature ECS with optimizations using CRTP", routerLink: "/ecs", previewPath: "ecs" },
    { name: "Slothomancer", routerLink: "/slothomancer", previewPath: "slothomancer" }
  ];
  // heroes: Hero[] = [];

  // constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }
}
