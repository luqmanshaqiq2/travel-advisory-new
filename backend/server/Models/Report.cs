using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Report
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required DateTime From { get; set; }
        [Required]
        public required DateTime To { get; set; }
        [Required]
        public required string Description { get; set; }
        public string? UserId { get; set; }
        public string? Status { get; set; }
        public string? PhotoUrl { get; set; }


    }
}
