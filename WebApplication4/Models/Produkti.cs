using System.ComponentModel.DataAnnotations;

public class Produkti
{
    public int Id { get; set; }

    [Required]
    public string NazvaProdukcia { get; set; } = string.Empty;

    [Required]
    public decimal Price { get; set; }

    [Required]
    public int Quantity { get; set; }
}