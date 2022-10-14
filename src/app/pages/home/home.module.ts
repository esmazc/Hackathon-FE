import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HomeService } from './shared/home.service';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    EditorModule,
    AutocompleteLibModule
  ],
  exports: [
    HomePageComponent,

  ], providers: [
    HomeService,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class HomeModule { }