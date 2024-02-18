
namespace WebAPI.Models
{
    public class Department : BaseEntity
    {
        public ICollection<Employee> Employees { get; set; } = new List<Employee>();

    }
}
