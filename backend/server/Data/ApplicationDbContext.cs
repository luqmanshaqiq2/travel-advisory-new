using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Tables
        public DbSet<Users> Users { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Advisory> Advisories { get; set; }
        public DbSet<Expense> Expenses { get; set; }
        public DbSet<History> Histories { get; set; }
        public DbSet<Report> Reports { get; set; }
    }
}
