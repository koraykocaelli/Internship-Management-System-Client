import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <h1>Emin misiniz?</h1>
    <button mat-raised-button color="primary" (click)="confirm()">Evet</button>
    <button mat-button mat-dialog-close>Hayır</button>
  `,
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirm(): void {
    this.dialogRef.close(true); // Silme işlemini onayla
  }
}
