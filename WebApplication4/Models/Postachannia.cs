using System.ComponentModel.DataAnnotations;

namespace SupplyManagementSystem.Models
{
    public class Postachannia
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Назва продукції є обов'язковою")]
        [StringLength(50, ErrorMessage = "Назва не може перевищувати 50 символів")]
        [Display(Name = "Назва продукції")]
        public string NazvaProdukcia { get; set; } = string.Empty; // Ініціалізація за замовчуванням

        [Required(ErrorMessage = "Кількість є обов'язковою")]
        [Range(1, int.MaxValue, ErrorMessage = "Кількість має бути більше 0")]
        [Display(Name = "Кількість")]
        public int Kilkist { get; set; }

        [Required(ErrorMessage = "Код продукції є обов'язковим")]
        [Display(Name = "Код продукції")]
        public int KodProdukcia { get; set; }

        [Required(ErrorMessage = "Код споживача є обов'язковим")]
        [Display(Name = "Код споживача")]
        public int KodSposhivacha { get; set; }

        [Required(ErrorMessage = "Дата відправлення є обов'язковою")]
        [DataType(DataType.Date, ErrorMessage = "Некоректний формат дати")]
        [Display(Name = "Дата відправлення")]
        public DateTime DataVidpravlenna { get; set; } = DateTime.Today; // Значення за замовчуванням
    }
}