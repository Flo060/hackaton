import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent} from "./acceuil/acceuil.component";
import { AdminComponent} from "./admin/admin.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: '', component: AcceuilComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
