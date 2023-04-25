import { AppComponent } from "src/app/app.component";
import { OrgImageComponent } from "./Components/org-image/org-image.component";
import { Route } from "@angular/router";

// In admin/routes.ts:
export default [
  {path: 'home', component: AppComponent},
  {path: 'image', component: OrgImageComponent},
  // ...
] as Route[];
