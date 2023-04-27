import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Contact} from '../../interfaces/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactData: Contact = null;

  onSubmitForm(dataForm: NgForm) {
    if (dataForm.invalid) {
      console.log('Invalid Form')
    } else {
      this.contactData = dataForm.value;
      console.log(dataForm.value)
    }

  }
}
