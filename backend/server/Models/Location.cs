using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Location
    {
        [Key]
        public int Id { get; set; }

        public required string Name { get; set; }
        public required string Description { get; set; }
    }
}
