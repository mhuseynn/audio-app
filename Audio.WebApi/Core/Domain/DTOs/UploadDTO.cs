using Microsoft.AspNetCore.Http;

namespace Domain.DTOs;

public class UploadDTO
{
    public string Title { get; set; }

    public IFormFile AudioFile { get; set; }
}
