using Application.Repositories;
using Domain.Entities.Concretes;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class FavoriteRepository : GenericRepository<Favorite>,IFavoriteRepository
{
    public FavoriteRepository(AudioDbContext audioDbContext) : base(audioDbContext)
    {
        
    }
}
