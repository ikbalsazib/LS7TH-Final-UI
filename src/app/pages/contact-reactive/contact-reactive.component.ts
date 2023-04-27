import {Component, OnInit} from '@angular/core';
import {Contact} from '../../interfaces/contact';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit{

  dataForm: FormGroup;
  contactData: Contact = null;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.dataForm = this.fb.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      isMarried: [null],
      address: [null],
    })
  }

  onSubmit() {
    if (this.dataForm.invalid) {
      console.log('Form Invalid')
    } else {
      this.contactData = this.dataForm.value;
      console.log(this.dataForm.value)
    }
  }
}
