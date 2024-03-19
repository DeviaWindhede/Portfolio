import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VertexPainterComponent } from './articles/vertex-painter/vertex-painter.component';
import { EcsComponent } from './articles/ecs/ecs.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'vertex-painter', component: VertexPainterComponent },
    { path: 'ecs', component: EcsComponent }
];
