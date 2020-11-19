import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Page Components */
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { DataViewerComponent } from "./pages/data-viewer/data-viewer.component";
import { AboutComponent } from "./pages/about/about.component";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "data-viewer", component: DataViewerComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
