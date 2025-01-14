using Application.RepositoriesApp.Concretes;
using Domain.Entities.Concretes;

namespace Application.Repositories.Concretes;

public interface IAppUserRepository : IGenericRepository<AppUser>
{
    public  Task<AppUser?> GetByEmailAsync(string email);
}
