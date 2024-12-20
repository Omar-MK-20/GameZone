namespace GameZone.Models
{
    public class Game : BaseEntity
    {
        [MaxLength(length: 2500)]
        public string Description { get; set; } = string.Empty;
        
        [MaxLength(length: 500)]
        public string Cover { get; set; } = string.Empty;

        //forigon key for category table
        public int CategoryId { get; set; }
        public Category Category { get; set; } = default!;


        //relation for the device table
        public ICollection<GameDevice> Devices { get; set; } = new List<GameDevice>();


    }
}
