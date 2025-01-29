import { Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { CatPageComponent } from '../cat-page/cat-page.component';
import { AddcatComponent } from '../addcat/addcat.component';

export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'catPage/:id', component: CatPageComponent},
    {path: 'addCat', component: AddcatComponent}
];
