﻿using Phonebook.Data.Models;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;

namespace Phonebook.Data.Services
{
    public class InMemoryContactData : IContactData
    {
        List<Contact> contacts;

        public InMemoryContactData()
        {
            contacts = new List<Contact> { 
                new Contact() {Id=1, FirstName="Jerry", LastName="Endlich", PhoneNumber="11111111111" },
                new Contact() {Id=2, FirstName="Brad", LastName="Molzen", PhoneNumber="2222222222" },
                new Contact() {Id=3, FirstName="Alminda", LastName="Brundyn", PhoneNumber="33333333333" },
                new Contact() {Id=4, FirstName="Shardul", LastName="Desai", PhoneNumber="44444444444" },
                new Contact() {Id=5, FirstName="Ray", LastName="Hogan", PhoneNumber="55555555555" },
                new Contact() {Id=6, FirstName="Alan", LastName="Blake", PhoneNumber="66666666666" },
                new Contact() {Id=7, FirstName="Nathan", LastName="Johnson", PhoneNumber="77777777777" },
                new Contact() {Id=8, FirstName="Vipul", LastName="Kaushal", PhoneNumber="88888888888" },
                new Contact() {Id=9, FirstName="Bruce", LastName="Licht", PhoneNumber="99999999999" },
            };
        }

        public IEnumerable<Contact> GetContacts()
        {
            return contacts;
        }
        public Contact GetContactById(int id)
        {
            var contact = contacts.FirstOrDefault<Contact>(c => c.Id == id);
            return contact;
        }

        public void AddContact(Contact contact)
        {
            contacts.Add(contact);
        }        
        
        public void UpdateContact(Contact contact)
        {
            var existingContact = contacts.FirstOrDefault<Contact>(c => c.Id == contact.Id);
            if (existingContact != null) {
                existingContact.FirstName = contact.FirstName;
                existingContact.LastName = contact.LastName;
                existingContact.PhoneNumber = contact.PhoneNumber;
            }
        }

        public void DeleteContact(Contact contact) { 
            contacts.Remove(contact);
        }
    }
}
