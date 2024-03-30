import { Component } from '@angular/core';
import { LazyImgDirective } from '../../lazy-img.directive';
import { CommonModule } from '@angular/common';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';

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
  imagePaths: string[] = [""];
  contributions: string[] = [];
  link: GameProjectLink | undefined = undefined;
}

@Component({
  selector: 'app-game-projects',
  standalone: true,
  imports: [ LazyImgDirective, CommonModule, BackToTopBtnComponent ],
  templateUrl: './game-projects.component.html',
  styleUrl: './game-projects.component.scss'
})
export class GameProjectsComponent {
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
      imagePaths: [ "place-holde", "place-holde" ],
      contributions: [
        "Vertex painting, ECS, VFX Timeline implementaiton, Particle System, Animation blending",
        "Post processing, Toon shader and Lighting implementation",
        "Library integration (PhysX, dxtex) and Premake, Build and deployment pipeline",
        "Rendering pipeline and integration, Rendering- and Engine optimization, Binary import/export and communication",
        "Player CCC, Animation controllers",
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
      imagePaths: [ "place-holde" ],
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
      imagePaths: [ "place-holde" ],
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
      imagePaths: [ "place-holde" ],
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
      imagePaths: [ "place-holde" ],
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
      imagePaths: [ "place-holde" ],
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
      imagePaths: [ "place-holde" ],
      contributions: [
        "Map Editor and procedural map speed adaptation",
        "Player controller"
      ],
      link: undefined,
    }
  ];

}
