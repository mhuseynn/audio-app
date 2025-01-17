using Domain.Entities.Concretes;

namespace Application.Services;

public interface IPlaylistService
{

    Task<Playlist> GetPlaylistAsync(int UserId);
    Task<string> AddAudioAsync(Audio audio);
    Task<string> DeleteAudioAsync(Audio audio);

}
