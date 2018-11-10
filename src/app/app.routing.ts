import { TimestampsComponent } from "./timestamps/timestamps.component";
import { Routes, RouterModule } from "@angular/router";
import { NewTimestampComponent } from "./new-timestamp/new-timestamp.component";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
  { path: "", component: TimestampsComponent },
  { path: "new-timestamp", component: NewTimestampComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
