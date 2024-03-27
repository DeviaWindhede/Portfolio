import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VertexPainterComponent } from './articles/vertex-painter/vertex-painter.component';
import { EcsComponent } from './articles/ecs/ecs.component';
import { GameProjectsComponent } from './articles/game-projects/game-projects.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, title: 'Devia Windhede' },
    { path: 'tga-projects', component: GameProjectsComponent, title: 'TGA Projects' },
    { path: 'vertex-painter', component: VertexPainterComponent, title: 'Vertex Painter' },
    { path: 'ecs', component: EcsComponent, title: 'S-ECS' }
];
