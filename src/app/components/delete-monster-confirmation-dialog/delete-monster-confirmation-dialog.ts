import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-monster-confirmation-dialog',
  imports: [MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MatButtonModule],
  templateUrl: './delete-monster-confirmation-dialog.html',
  styleUrl: './delete-monster-confirmation-dialog.css',
})
export class DeleteMonsterConfirmationDialog {

}
