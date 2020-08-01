import { MainContentComponent } from './main-content/main-content.component';
import { HowToUseComponent } from './how-to-use/how-to-use.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: MainContentComponent
  },
  {
      path: 'how-to-use',
      component: HowToUseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
