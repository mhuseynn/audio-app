
using Domain.Entities.Concretes;

namespace Application.Services;

public interface ITokenService
{
    public string GenerateAccessToken(AppUser User);

}
