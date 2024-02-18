

using System.Text.Json.Serialization;

namespace WebAPI.Models
{
    public class Employee : BaseEntity
    {

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = string.Empty;
        public long Code { get; set; }
        //[ForeignKey("Department")]
        public int DepartmentId { get; set; }
        //public Department Department { get; set; } = default!;
        public string MobileNumber { get; set; } = string.Empty;
        public DateTime HireDate { get; set; }
        public string NationalId { get; set; } = string.Empty;
        //[ForeignKey("JobTitle")]
        public int JobTitleId { get; set; }
        //public JobTitle JobTitle { get; set; } = default!;

    }
}
