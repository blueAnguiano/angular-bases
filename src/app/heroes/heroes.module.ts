import { NgModule } from "@angular/core";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  exports: [
    HeroeComponent,
    ListComponent
  ]
})
export class HeroesModule {

}
