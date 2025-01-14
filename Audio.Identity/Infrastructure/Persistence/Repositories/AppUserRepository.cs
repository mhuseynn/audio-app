using Application.Repositories.Concretes;
using Domain.Entities.Concretes;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class AppUserRepository : GenericRepository<AppUser>,IAppUserRepository
{

    public AppUserRepository(AppDbContext context) : base(context)
    {
        
    }

    public async Task<AppUser> GetByEmailAsync(string email)
    {
        var user=  _context.AppUsers.FirstOrDefault(x => x.Email == email);

        if (user is not null)
        {
            return user;
        }
        return null;
    }
}
