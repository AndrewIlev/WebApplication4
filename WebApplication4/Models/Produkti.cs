using System.ComponentModel.DataAnnotations;

namespace SupplyManagementSystem.Models
{
    public class Produkti
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public double Cina { get; set; }

        [Required]
        [StringLength(50)]
        public string NazvaProdukcia { get; set; }

        [Required]
        public int KodProdukcia { get; set; }
    }
}