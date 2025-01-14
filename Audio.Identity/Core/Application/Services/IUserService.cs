using Domain.DTOs;
using Domain.Entities.Concretes;

namespace Application.Services;

public interface IUserService
{
   Task<string> AddAsync(LoginDTO addUser);
}
