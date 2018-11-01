import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CdkTableModule } from '@angular/cdk/table';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule  } from '@angular/material';
import { MatDialogModule  } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';

import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PmtDialogRoutingModule } from './pmt-dialog-routing.module';
import { PmtDialogComponent } from './components/pmt-dialog.component';
import { PmtDialogService } from './services/pmt-dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule,
    MatDialogModule,
    MatDividerModule,
    FlexLayoutModule,
    PmtDialogRoutingModule
  ],
  declarations: [
    PmtDialogComponent ],
  exports: [
    PmtDialogComponent  ],
  providers: [
    PmtDialogService,
  ],
  entryComponents: [
    PmtDialogComponent,
  ],
})
export class PmtDialogModule { }
