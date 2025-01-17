using Application.Repositories.Concretes;
using Application.Services;
using Domain.DTOs;
using Domain.Entities.Concretes;
using Microsoft.AspNetCore.Identity;
using Microsoft.Identity.Client;

namespace Infrastructure.Services;

public class AuthService : IAuthService
{

    private readonly IAppUserRepository _userRepository;
    private readonly UserManager<AppUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly IUserService _userService;


    public AuthService(IAppUserRepository userRepository, UserManager<AppUser> userManager, ITokenService tokenService, IUserService userService)
    {
        _userRepository = userRepository;
        _userManager = userManager;
        _tokenService = tokenService;
        _userService = userService;
    }

    public async Task<string> Login(LoginDTO loginDTO)
    {
        var user = await _userRepository.GetByEmailAsync(loginDTO.Email);
        

        if (user is not null)
        {
            var passwordHasher = new PasswordHasher<AppUser>();
            var result = passwordHasher.VerifyHashedPassword(user, user.PasswordHash, loginDTO.Password);
            if (result == PasswordVerificationResult.Success)
            {
                var token = _tokenService.GenerateAccessToken(user);
                return token;
            }
        }
        return null;
    }

    public async Task<string> Register(LoginDTO registerDTO)
    {
        var existingUser = await _userRepository.GetByEmailAsync(registerDTO.Email);
        if (existingUser is not null)
        {
            return "User already exists";
        }

        ////////////////////////
        var result = await _userService.AddAsync(registerDTO);

        return result.ToString();
    }

}
