using Domain.DTOs;

namespace Application.Services;

public interface IAudioService
{
   
    Task<string> GetAudioAsync();

    Task<string> UploadAudioAsync(AddAudioDTO audioDto);

    Task<string> DownloadAudioAsync(string path);

    Task<List<AudioDTO>> GetAllAudiosAsync();

}
