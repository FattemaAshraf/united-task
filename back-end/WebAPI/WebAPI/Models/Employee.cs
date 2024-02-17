namespace WebAPI.Models
{
    public class Employee : BaseEntity
    {
        public string Email { get; set; } = string.Empty;
        public double Code { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; } = default!;
        public long MobileNumber { get; set; }
        public DateTime HireDate { get; set; }
        public long NationalId { get; set; }

    }
}
