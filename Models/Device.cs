namespace GameZone.Models
{
    public class Device : BaseEntity
    {
        [MaxLength(length: 50)]
        public string Icon { get; set; } = string.Empty;

        //public ICollection<GameDevice> Game { get; set; } = new List<GameDevice>();
    }
}
