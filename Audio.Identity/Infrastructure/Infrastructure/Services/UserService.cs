using Application.Repositories.Concretes;
using Application.Services;
using Domain.DTOs;
using Domain.Entities.Concretes;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Services;

public class UserService : IUserService
{
    private readonly IAppUserRepository _userRepository;
    private readonly UserManager<AppUser> _userManager;

    public UserService(IAppUserRepository userRepository, UserManager<AppUser> userManager)
    {
        _userRepository = userRepository;
        _userManager = userManager;
    }

    public async Task<string> AddAsync(LoginDTO addUser)
    {
        var appUser = new AppUser
        {
            UserName = addUser.Email,
            Email = addUser.Email,
            CreatedDate = DateTime.UtcNow,
            UpdatedDate = DateTime.UtcNow,
            IsDeleted = false
        };

        // Create the AppUser with hashed password
        var result = await _userManager.CreateAsync(appUser, addUser.Password!);
        if (!result.Succeeded)
        {
            return string.Join("; ", result.Errors.Select(e => e.Description));
        }

        try
        {
            await _userRepository.AddAsync(appUser);
            await _userRepository.SaveAllChangesAsync();

            return "user added successfully.";
        }
        catch (Exception ex)
        {
            return ex.Message;
        }
    }

}
