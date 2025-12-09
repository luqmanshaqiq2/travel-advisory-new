using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Advisory
    {
            [Key] // This marks the property as the primary key
            public int Id { get; set; }
        
            public required string Title { get; set; }
            public required string Description { get; set; }
            public int LocationId { get; set; }

            // Navigation property
            [Required]
            public required Location Location { get; set; } = null!;
    }
}
