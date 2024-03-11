import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { LazyImgDirective } from '../lazy-img.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, LazyImgDirective ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
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
