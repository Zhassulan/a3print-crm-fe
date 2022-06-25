import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employeeName!: string;
  phoneNumber!: string;
  salary!: string;
  login!: string;
  password!: string;
  email!: string;
  cardNumber!: string;

  constructor(public dialogRef: MatDialogRef<EditEmployeeComponent>) {
  }

  ngOnInit(): void {
  }

  click() {
  }

  close() {
    this.dialogRef.close();
  }
}
