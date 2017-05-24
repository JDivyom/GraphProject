import { Routes,RouterModule } from '@angular/router';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';
import { LineGraphComponent } from '../line-graph/line-graph.component';
import { HeaderComponent } from '../header/header.component';
import {FileUploadComponent} from '../file-upload/file-upload.component';
import { ReadfileComponent } from "../readfile/readfile.component";

const router:Routes=[

    {path:'bargraph',component:BarGraphComponent},
     {path:'linegraph', component:LineGraphComponent},
     {path:'fileupload',component: FileUploadComponent},
     {path:'readfile', component: ReadfileComponent}

];
export const routes=RouterModule.forRoot(router);