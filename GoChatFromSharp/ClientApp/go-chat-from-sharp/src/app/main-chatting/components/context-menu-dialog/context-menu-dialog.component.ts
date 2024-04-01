import { Component, Inject } from '@angular/core';
import { EContextMenu } from '../../../models/EContextMenu.enum';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { IChatMessage } from '../../../models/IChatMessage';

@Component({
  selector: 'app-context-menu-dialog',
  templateUrl: './context-menu-dialog.component.html',
  styleUrls: ['./context-menu-dialog.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class ContextMenuDialogComponent {
  public contextMenu!: EContextMenu;


  constructor(
    public dialogRef: MatDialogRef<ContextMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public chatMessage: IChatMessage,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
