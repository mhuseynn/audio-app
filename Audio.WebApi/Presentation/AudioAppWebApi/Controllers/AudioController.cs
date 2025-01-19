using Application.Repositories;
using Application.Services;
using Domain.DTOs;
using Domain.Entities.Concretes;
using Microsoft.AspNetCore.Mvc;

namespace AudioAppWebApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AudioController : ControllerBase
{
    private readonly IAudioService _audioService;
    private readonly IAudioRepository _audioRepository;

    public AudioController(IAudioService audioService, IAudioRepository audioRepository)
    {
        _audioService = audioService;
        _audioRepository = audioRepository;
    }


    [HttpPost("[action]")]
    public async Task<IActionResult> UploadAudio(AddAudioDTO uploadDTO)
    {
        var result =await _audioService.UploadAudioAsync(uploadDTO);
        return Ok(result);
       
    }


    [HttpGet("GetAllAudios")]
    public async Task<IActionResult> GetAllAudios()
    {
        try
        {
            var audios = await _audioService.GetAllAudiosAsync();
            return Ok(audios);
        }
        catch (Exception ex)
        {
            return BadRequest(new { Error = ex.Message });
        }
    }

}
