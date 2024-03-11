import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VertexPainterComponent } from './vertex-painter/vertex-painter.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'vertex-painter', component: VertexPainterComponent }
];
