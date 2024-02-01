import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';
import { SpLayoutComponent } from './student-portal/sp-layout/sp-layout.component';
import { ApLayoutComponent } from './advisor-portal/ap-layout/ap-layout.component';
import { StudentInfoComponent } from './student-portal/components/student-info/student-info.component';
import { OgBilgiComponent } from './advisor-portal/components/og-bilgi/og-bilgi.component';
import { AdvisorsComponent } from './admin/components/advisors/advisors.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: AdvisorsComponent   },
      { path: "dashboard", loadChildren: () => import("./admin/components/dashboard/dashboard.module").then(module => module.DashboardModule) },
      { path: "students", loadChildren: () => import("./admin/components/students/students.module").then(module => module.StudentsModule) },
      { path: "st-int-nt", loadChildren: () => import("./admin/components/st-int-nt/st-int-nt.module").then(module => module.StIntNtModule) },
    ]
  },
  { path: "", component: HomeComponent },
  { path: "formlar", loadChildren: () => import("./ui/components/formlar/formlar.module").then(module => module.FormlarModule) },
  { path: "ig-belge", loadChildren: () => import("./ui/components/ig-belge/ig-belge.module").then(module => module.IgBelgeModule) },
  { path: "staj-def", loadChildren: () => import("./ui/components/staj-def/staj-def.module").then(module => module.StajDefModule) },
  { path: "staj-yon", loadChildren: () => import("./ui/components/staj-yon/staj-yon.module").then(module => module.StajYonModule) },
  { path: "login", loadChildren: () => import("./ui/components/login/login.module").then(module => module.LoginModule) },

  { 
    path: "student-portal", component: SpLayoutComponent, children: [
      { path: "", component: StudentInfoComponent},
      { path: "student-intership-approval", loadChildren: () => import("./student-portal/components/student-intership-approval/student-intership-approval.module").then(module => module.StudentIntershipApprovalModule) },
      {path: "student-intership-info", loadChildren: ()=> import("./student-portal/components/student-intership-info/student-intership-info.module").then(module => module.StudentIntershipInfoModule)},
      {path: "student-intership-notebook", loadChildren: ()=> import("./student-portal/components/student-intership-notebook/student-intership-notebook.module").then(module=> module.StudentIntershipNotebookModule)}
    ]
  },  

  { 
    path: "advisor-portal", component: ApLayoutComponent, children: [
      { path: "", component: OgBilgiComponent },
      { path: "og-staj-def", loadChildren: () => import("./advisor-portal/components/og-staj-def/og-staj-def.module").then(module => module.OgStajDefModule) },
      {path: "onayb-og", loadChildren: ()=> import("./advisor-portal/components/onayb-og/onayb-og.module").then(module => module.OnaybOgModule)},
    ]
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
