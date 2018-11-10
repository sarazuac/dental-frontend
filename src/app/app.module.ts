import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TimestampComponent } from "./timestamp/timestamp.component";
import { TimestampsComponent } from "./timestamps/timestamps.component";
import { NewTimestampComponent } from "./new-timestamp/new-timestamp.component";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";
import { TimestampService } from "./timestamp/timestamp.service";

@NgModule({
  declarations: [
    AppComponent,
    TimestampComponent,
    TimestampsComponent,
    NewTimestampComponent
  ],
  imports: [BrowserModule, HttpModule, routing],
  providers: [TimestampService],
  bootstrap: [AppComponent]
})
export class AppModule {}
