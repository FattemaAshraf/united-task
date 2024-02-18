
namespace WebAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }

        //public DbSet<Department> Departments { get; set; }

        //public DbSet<JobTitle> JobTitles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            /* //seeding
            
            modelBuilder.Entity<Department>().HasData(new Department[]
            {
                new Department {Id = 1, Name = "General Management"},
                new Department {Id = 2, Name = "Marketing Department"},
                new Department {Id = 3, Name = "Finance Department"},
                new Department {Id = 5, Name = "Sales Department"},
                new Department {Id = 6, Name = "Human Resource Department"},
                new Department {Id = 7, Name = "Purchase Department"}
            }); ;
            //seeding
            modelBuilder.Entity<JobTitle>().HasData(new JobTitle[]
            {
                new JobTitle {Id = 8, Name = "Entry-level"},
                new JobTitle {Id = 9, Name = "Intermediate or experienced (senior staff)"},
                new JobTitle {Id = 10, Name = "First-level management"},
                new JobTitle {Id = 11, Name = "Middle management"},
                new JobTitle {Id = 12, Name = "Executive or senior management"},
            }); */
            
        }
    }
}
