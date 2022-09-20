import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-mat-dialog-confirm',
  templateUrl: './mat-dialog-confirm.component.html',
  styleUrls: ['./mat-dialog-confirm.component.scss']
})
export class MatDialogConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public editData :any
  ,public dialogRef: MatDialogRef<MatDialogConfirmComponent>,private api: HttpService,private _router: Router) { }

  ngOnInit(): void {
    console.log(this.editData)
  }

  closeDialog(){
    this.dialogRef.close()
  }
  deleteCustomer(){
    this.api.deleteCustomer(this.editData).subscribe({
      next:(res) =>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      }
    })
    this.dialogRef.close()
    this._router.navigate(['/customer'])
  }
}
