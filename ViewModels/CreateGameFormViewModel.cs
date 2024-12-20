namespace GameZone.ViewModels
{
    public class CreateGameFormViewModel : GameFormViewModel
    {
        // validate extension and size
        [AllowedExtensions(FileSettings.AllowedExtensions),
            MaxFileSize(FileSettings.MaxFileSizeInBytes)]
        public IFormFile Cover { get; set; } = default!;
    }
}
