using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }
  
        [Required]
        [EmailAddress]
        public required string Email { get; set; }
        [Required]
        public required string PasswordHash { get; set; }
        public string Role { get; set; } = "User";
    }
}
