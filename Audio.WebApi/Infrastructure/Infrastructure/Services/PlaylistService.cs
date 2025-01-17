using Application.Services;
using Domain.Entities.Concretes;

namespace Infrastructure.Services;

public class PlaylistService : IPlaylistService
{
    public Task<string> AddAudioAsync(Audio audio)
    {
        throw new NotImplementedException();
    }

    public Task<string> DeleteAudioAsync(Audio audio)
    {
        throw new NotImplementedException();
    }

    public Task<Playlist> GetPlaylistAsync(int UserId)
    {
        throw new NotImplementedException();
    }
}
