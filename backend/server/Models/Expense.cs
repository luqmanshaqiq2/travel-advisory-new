using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Expense
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public DateOnly TimePeriod { get; set; }

        [Range(0, double.MaxValue)]
        public decimal Booking { get; set; }

        [Range(0, double.MaxValue)]
        public decimal Food { get; set; }

        [Range(0, double.MaxValue)]
        public decimal Travel { get; set; }


    }
}
