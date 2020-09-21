import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact, ContactModel } from 'src/app/contacts-page/models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  phonebookApiUrlContacts = 'https://localhost:44315/api/contacts'

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.phonebookApiUrlContacts);
  }

  addContact(contact: Contact) {
    return this.http.post(this.phonebookApiUrlContacts, contact);
  }

  deleteContact(id: number) {
    return this.http.delete(`${this.phonebookApiUrlContacts}/${id}`);
  }
  
  updateContact(id: number, contact: ContactModel) {
    return this.http.put(`${this.phonebookApiUrlContacts}/${id}`, contact);
  }
}
