import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from './Shows/shows/shows.component';
import { NewsComponent } from './News/news/news.component';

const routes: Routes = [
  {path: 'shows', component : ShowsComponent},
  {path: 'news', component : NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
