import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitylistComponent } from './citylist/citylist.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PostsComponent } from './posts/posts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitylistComponent,
    NavComponent,

    SlideshowComponent,
    PostsComponent,
    PostFormComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
