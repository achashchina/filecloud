import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCheckboxModule, MatSortModule} from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NewDirDialogComponent } from './new-dir-dialog/new-dir-dialog.component';
import { UploadFilesDialogComponent } from './upload-files-dialog/upload-files-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { DxButtonModule } from 'devextreme-angular';
import { DxContextMenuModule } from 'devextreme-angular';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    NewDirDialogComponent,
    UploadFilesDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    DxButtonModule,
    DxContextMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewDirDialogComponent]
})

export class AppModule { }