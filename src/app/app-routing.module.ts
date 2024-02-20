import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { SpLayoutComponent } from './student-portal/sp-layout/sp-layout.component';
import { ApLayoutComponent } from './advisor-portal/ap-layout/ap-layout.component';
import { StudentInfoComponent } from './student-portal/components/student-info/student-info.component';
import { OgBilgiComponent } from './advisor-portal/components/og-bilgi/og-bilgi.component';
import { AuthGuard } from './guards/common/auth.guard';
import { StudentGuard } from './guards/common/student.guard';
import { AdvisorGuard } from './guards/common/advisor.guard';


const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent   },
      { path: "advisors", loadChildren: () => import("./admin/components/advisors/advisors.module").then(module => module.AdvisorsModule) },
      { path: "students", loadChildren: () => import("./admin/components/students/students.module").then(module => module.StudentsModule) },
    ]
  },

  { 
    path: "student-portal", component: SpLayoutComponent, children: [
      { path: "", component: StudentInfoComponent, canActivate: [StudentGuard]},
      { path: "student-intership-approval", loadChildren: () => import("./student-portal/components/student-intership-approval/student-intership-approval.module").then(module => module.StudentIntershipApprovalModule), canActivate: [StudentGuard] },
      {path: "student-intership-info", loadChildren: ()=> import("./student-portal/components/student-intership-info/student-intership-info.module").then(module => module.StudentIntershipInfoModule), canActivate: [StudentGuard]},
      
    ], canActivate: [StudentGuard]
  },  

  { 
    path: "advisor-portal", component: ApLayoutComponent, children: [
      { path: "", component: OgBilgiComponent, canActivate: [AdvisorGuard] },
      { path: "og-staj-def", loadChildren: () => import("./advisor-portal/components/og-staj-def/og-staj-def.module").then(module => module.OgStajDefModule), canActivate: [AdvisorGuard] },
      {path: "onayb-og", loadChildren: ()=> import("./advisor-portal/components/onayb-og/onayb-og.module").then(module => module.OnaybOgModule), canActivate: [AdvisorGuard]},
    ], canActivate: [AdvisorGuard]
  },

  { path: "", component: HomeComponent },
  { path: "formlar", loadChildren: () => import("./ui/components/formlar/formlar.module").then(module => module.FormlarModule) },
  { path: "ig-belge", loadChildren: () => import("./ui/components/ig-belge/ig-belge.module").then(module => module.IgBelgeModule) },
  { path: "staj-def", loadChildren: () => import("./ui/components/staj-def/staj-def.module").then(module => module.StajDefModule) },
  { path: "staj-yon", loadChildren: () => import("./ui/components/staj-yon/staj-yon.module").then(module => module.StajYonModule) },
  { path: "login", loadChildren: () => import("./ui/components/login/login.module").then(module => module.LoginModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
