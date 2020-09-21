using System.ComponentModel.DataAnnotations;

namespace Phonebook.Data.Models
{
    public class Contact
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public string FullName
        {
            get
            {
                return $"{FirstName} {LastName}";
            }
        }
        [Required]
        public string PhoneNumber { get; set; }
    }
}
