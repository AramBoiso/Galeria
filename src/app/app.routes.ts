import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';


const appRoutes:Routes = [
    {path: '', redirectTo:'/gallery', pathMatch:'full'},
    {path: 'gallery', component: GalleryComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
  ];

  export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);