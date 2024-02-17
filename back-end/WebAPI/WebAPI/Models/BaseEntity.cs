using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class BaseEntity
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;
    }
}
