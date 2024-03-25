import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CardComponent } from './card/card.component';
import { LazyImgDirective } from '../lazy-img.directive';
import { CardData } from '../app-definitions';
import { RouterModule } from '@angular/router';

class Team
{
  programmers: number = 0;
  artists: number = 0;
  designers: number = 0;
}

class GameProject
{
  name: string = "";
  genre: string ="";
  time: number = 0;
  team: Team = { programmers: 0, artists: 0, designers: 0 };
  engine: string = "";
  imagePath: string = "";
  contributions: string[] = [];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, LazyImgDirective, CommonModule, RouterModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  cardData: CardData[] = [
    { name: "Vertex Painter", routerLink: "/vertex-painter", previewPath: "Vertex Painter" },
    { name: "Signature ECS with optimizations using CRTP", routerLink: "/ecs", previewPath: "Signature ECS" },
    { name: "Friendship Engine", routerLink: "/friendship-engine", previewPath: "Friendship Engine" }
  ];

  temp: GameProject = 
  { 
    name: "Test Name",
    genre: "Genre Name",
    time: 160, // 8 weeks * 20h per week
    team: {
      programmers: 1,
      artists: 2,
      designers: 3
    },
    engine: "Engine Name",
    imagePath: "place-holde",
    contributions: [
      "Point 1",
      "Point 2",
      "Point 3"
    ]
  };

  gameProjectData: GameProject[] = [
    this.temp,
    this.temp,
    this.temp,
    this.temp
  ];



    // On the Goose!
    // SPITE: Mask of Brigitte
    // B-DAY 1947
    // Aeon's Adventure: Distorted Time
    // Dissonance
    // Slothomancer
    // Squid Heist





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
