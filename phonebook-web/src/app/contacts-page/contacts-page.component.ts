import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactsService } from '../shared/services/contacts.service';
import { Contact, ContactModel } from './models/Contact';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  contacts: ContactModel[];
  selectedContact: ContactModel = null;
  contactForm: FormGroup;
  isEditing = false;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.getContacts();
    this.initializeContactForm();
  }

  getContacts(): void {
    this.contactsService.getContacts().subscribe((response: ContactModel[]) => {
      this.contacts = response;
      console.log(this.contacts);
    })
  }

  selectContact(id: number): void {
    this.selectedContact = this.contacts.find(contact => contact.id === +id);
    this.isEditing = false;
    console.log(this.selectedContact);
  }

  deleteContact() {
    this.contactsService.deleteContact(this.selectedContact.id).subscribe(
      (response: ContactModel) => {
        this.contacts = this.contacts.filter(contact => contact.id !== response.id);
        this.selectedContact = null;
      }
      );
    }
    
    initializeContactForm(contact?: Contact) {
      this.contactForm = new FormGroup({
        firstName: new FormControl(contact?.firstName || ''),
        lastName: new FormControl(contact?.lastName || ''),
        phoneNumber: new FormControl(contact?.phoneNumber || ''),
      });
    }
    
    save() {
      console.log(this.contactForm);
      const contact = new Contact(this.contactForm.controls.firstName.value, this.contactForm.controls.lastName.value, this.contactForm.controls.phoneNumber.value);
      if(this.selectedContact?.id) {
        this.contactsService.updateContact(this.selectedContact.id, {id: this.selectedContact.id, ...contact}).subscribe(
          () => {
            this.contacts = this.contacts.filter(contact => contact.id !== this.selectedContact.id);
            this.contacts.push({id: this.selectedContact.id, fullName: `${this.contactForm.controls.firstName.value} ${this.contactForm.controls.lastName.value}`, ...contact});
            this.selectedContact = this.contacts.find(contact => contact.id === this.selectedContact.id);
            this.isEditing = false;
        }
      );
    } else {
      this.contactsService.addContact(contact).subscribe(
        (response: ContactModel) => {
          this.contacts.push(response);
          this.contactForm.reset();
        }
      );
    }
  }

  add(): void {
    this.contactForm.reset();
    this.selectedContact = null;
    this.isEditing = false;
  }

  edit(): void {
    const contact = new Contact(this.selectedContact.firstName, this.selectedContact.lastName, this.selectedContact.phoneNumber);
    this.isEditing = true;
    this.initializeContactForm(contact);
  }

  clear(): void {
    this.contactForm.reset();
  }

}
