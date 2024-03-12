import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CardComponent } from '../card/card.component';
import { LazyImgDirective } from '../lazy-img.directive';

class CardData
{
  public name: string = "";
  public routerLink: string = "";
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, LazyImgDirective, CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  cardData: CardData[] = [
    { name: "Vertex Painter", routerLink: "/vertex-painter" },
    { name: "Slothomancer", routerLink: "/slothomancer" }
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
