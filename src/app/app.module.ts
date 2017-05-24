import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Http} from '@angular/http';
import { AppComponent } from './app.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './shared/app.routing';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ReadfileComponent } from './readfile/readfile.component';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    HeaderComponent,
    LineGraphComponent,
    FileUploadComponent,
    ReadfileComponent,
    FileSelectDirective
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule,
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
