using Application.Services;
using Domain.DTOs;
using Domain.Entities.Concretes;
using Microsoft.AspNetCore.Identity;

using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IAuthService _authService;

    public UserController(UserManager<AppUser> userManager, IAuthService authService)
    {
        _userManager = userManager;
        _authService = authService;
    }


    [HttpPost("[action]")]
    public async Task<IActionResult> Login(LoginDTO loginDTO)
    {
        var result = await _authService.Login(loginDTO);
        return Ok(result);
    }

    [HttpPost("[action]")]
    public async Task<IActionResult> Register(LoginDTO loginDTO)
    {
        var result = await _authService.Register(loginDTO);
        return Ok(result);
    }
}
