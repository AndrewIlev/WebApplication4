using Microsoft.EntityFrameworkCore;
using SupplyManagementSystem.Models;

namespace SupplyManagementSystem.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Postachannia> Postachannia { get; set; }
        public DbSet<Produkti> Produkti { get; set; }
        public DbSet<Sposhivachi> Sposhivachi { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Postachannia>().ToTable("Postachannia");
            modelBuilder.Entity<Produkti>().ToTable("Produkti");
            modelBuilder.Entity<Sposhivachi>().ToTable("Sposhivachi");
        }
    }
}