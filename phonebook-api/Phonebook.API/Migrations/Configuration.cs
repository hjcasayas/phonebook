namespace Phonebook.API.Migrations
{
    using Phonebook.Data.Models;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Phonebook.API.Data.PhonebookAPIContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Phonebook.API.Data.PhonebookAPIContext context)
        {
            context.Contacts.AddOrUpdate(x => x.Id,
                new Contact() { Id = 1, FirstName = "Jerry", LastName = "Endlich", PhoneNumber = "11111111111" },
                new Contact() { Id = 2, FirstName = "Brad", LastName = "Molzen", PhoneNumber = "2222222222" },
                new Contact() { Id = 3, FirstName = "Alminda", LastName = "Brundyn", PhoneNumber = "33333333333" },
                new Contact() { Id = 4, FirstName = "Shardul", LastName = "Desai", PhoneNumber = "44444444444" },
                new Contact() { Id = 5, FirstName = "Ray", LastName = "Hogan", PhoneNumber = "55555555555" },
                new Contact() { Id = 6, FirstName = "Alan", LastName = "Blake", PhoneNumber = "66666666666" },
                new Contact() { Id = 7, FirstName = "Nathan", LastName = "Johnson", PhoneNumber = "77777777777" },
                new Contact() { Id = 8, FirstName = "Vipul", LastName = "Kaushal", PhoneNumber = "88888888888" },
                new Contact() { Id = 9, FirstName = "Bruce", LastName = "Licht", PhoneNumber = "99999999999" }
            );
        }
    }
}
