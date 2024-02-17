
namespace WebAPI.Models
{
    public class Department : BaseEntity
    {
        [NotMapped]
        public int ManagerId { get; set; }
        [NotMapped] 
        public Manager Manager { get; set; } = new Manager();
        public ICollection<Employee> Employees { get; set; } = new List<Employee>();

    }
}
