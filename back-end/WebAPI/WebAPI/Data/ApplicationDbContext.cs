
namespace WebAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
         //seeding
            modelBuilder.Entity<Department>().HasData(new Department[]
            {
                new Department {Id = 1, Name = "General Management"},
                new Department {Id = 2, Name = "Marketing Department"},
                new Department {Id = 3, Name = "Finance Department"},
                new Department {Id = 4, Name = "Sales Department"},
                new Department {Id = 5, Name = "Human Resource Department"},
                new Department {Id = 6, Name = "Purchase Department"}
            });
        }
    }
}
