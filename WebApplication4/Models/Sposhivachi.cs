using System.ComponentModel.DataAnnotations;

namespace SupplyManagementSystem.Models
{
    public class Sposhivachi
    {
        public int Id { get; set; }

        [Required]
        public string NazvaOrganizachia { get; set; } = string.Empty;

        [Required]
        public string Adresa { get; set; } = string.Empty;

        public int Telefon { get; set; }
    }
}