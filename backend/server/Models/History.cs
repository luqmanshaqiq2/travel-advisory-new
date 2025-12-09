using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class History
    {
        [Key]
        public int Id { get; set; }

        public required Users users { get; set; }
        public DateTime Time { get; set; }
        public required string Description { get; set; }
        
    }
}
