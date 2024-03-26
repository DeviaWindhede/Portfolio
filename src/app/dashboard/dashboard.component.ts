import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common'
import { CardComponent } from './card/card.component';
import { LazyImgDirective } from '../lazy-img.directive';
import { CardData } from '../app-definitions';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap, take } from 'rxjs';

class Team
{
  programmers: number = 0;
  artists: number = 0;
  designers: number = 0;
}

class GameProjectLink
{
  preview: string = "";
  destination: string = "";
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
  link: GameProjectLink | undefined = undefined;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CardComponent, LazyImgDirective, CommonModule, RouterModule ],
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

  // slothomancer google play: https://play.google.com/store/apps/details?id=frogBig.Slothomancer_v1&hl=en&gl=US

  gameProjectData: GameProject[] = [
    { 
      name: "On the Goose!",
      genre: "First Person Platformer",
      time: 300,
      team: {
        programmers: 6,
        artists: 5,
        designers: 3
      },
      engine: "Friendship Engine (Custom made)",
      imagePath: "place-holde",
      contributions: [
        "Animation blending and controller",
        "Vertex painting",
        "Core engine and optimizations",
        "Post processing, toon shader and lighting implementation",
        "PhysX library integration",
        "CCC",
      ],
      link: undefined,
    },
    { 
      name: "SPITE: Mask of Brigitte",
      genre: "Diablo-like",
      time: 180,
      team: {
        programmers: 6,
        artists: 5,
        designers: 3
      },
      engine: "Friendship Engine (Custom made)",
      imagePath: "place-holde",
      contributions: [
        "Deferred rendering, light rendering and post processing",
        "Skeltal mesh, animation import and implementation",
        "VFX implementation",
        "Entity Component System",
        "Core engine",
      ],
      link: undefined,
    },
    { 
      name: "B-DAY 1947",
      genre: "Puzzle",
      time: 80,
      team: {
        programmers: 6,
        artists: 5,
        designers: 3
      },
      engine: "Friendship Engine (Custom made)",
      imagePath: "place-holde",
      contributions: [
        "Rendering pipeline and DX11 integration",
        "Shaders and math",
        "Core engine system implementation and structure",
        "Library implementation"
      ],
      link: undefined,
    },
    { 
      name: "Aeon's Adventure: Distorted Time",
      genre: "2D Action Adventure RPG",
      time: 160,
      team: {
        programmers: 6,
        artists: 4,
        designers: 3
      },
      engine: "TGA's in-house engine",
      imagePath: "place-holde",
      contributions: [
        "Player CCC",
        "Animation system and blending"
      ],
      link: undefined,
    },
    { 
      name: "Dissonance",
      genre: "Platformer",
      time: 240,
      team: {
        programmers: 5,
        artists: 4,
        designers: 2
      },
      engine: "TGA's in-house engine",
      imagePath: "place-holde",
      contributions: [
        "Player CCC",
        "Animation system and blending",
        "Level import"
      ],
      link: undefined,
    },
    { 
      name: "Slothomancer",
      genre: "Puzzle",
      time: 160,
      team: {
        programmers: 5,
        artists: 4,
        designers: 3
      },
      engine: "Unity",
      imagePath: "place-holde",
      contributions: [
        "Map Editor",
        "Puzzle system",
        "Player Movement"
      ],
      link: {
        preview: "Google Play",
        destination: "https://play.google.com/store/apps/details?id=frogBig.Slothomancer_v1&hl=en&gl=US"
      }
    },
    { 
      name: "Squid Heist",
      genre: "Infinite Runner",
      time: 160,
      team: {
        programmers: 6,
        artists: 5,
        designers: 2
      },
      engine: "Unity",
      imagePath: "place-holde",
      contributions: [
        "Map Editor and procedural map speed adaptation",
        "Player controller"
      ],
      link: undefined,
    }
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

  constructor(@Inject(DOCUMENT) private document: any, private route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(val => {
      const el = this.document.querySelector('#' + val);
      el?.scrollIntoView();
    });
  }
}
