using Application.Repositories;
using Domain.Entities.Concretes;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class PlaylistRepository : GenericRepository<Playlist>,IPlaylistRepository
{
    public PlaylistRepository(AudioDbContext audioDbContext) : base(audioDbContext)
    {
        
    }
}
