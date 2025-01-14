using Domain.DTOs;
using Domain.Entities.Concretes;

namespace Application.Services;

public interface IAuthService
{
    Task<string> Login(LoginDTO loginDTO);
    Task<string> Register(LoginDTO loginDTO);
}
