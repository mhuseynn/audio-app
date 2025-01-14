using Application.Repositories;
using Domain.Entities.Concretes;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class AudioRepository : GenericRepository<Audio>, IAudioRepository
{
    public AudioRepository(AudioDbContext audioDbContext) : base(audioDbContext)
    {

    }
}
