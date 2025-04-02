using System.ComponentModel.DataAnnotations;

namespace SupplyManagementSystem.Models
{
    public class Sposhivachi
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Adresa { get; set; }

        [Required]
        public int NomerRahunku { get; set; }

        [Required]
        public int KodSposhivacha { get; set; }

        [Required]
        [StringLength(50)]
        public string NazvaOrganizachia { get; set; }
    }
}