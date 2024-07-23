import { NgModule } from "@angular/core";

import {CountComponent} from "./counter/counter.component";


@NgModule({
  declarations: [
    CountComponent
  ],
  exports: [
    CountComponent
  ]
})
export class CounterModule {}
