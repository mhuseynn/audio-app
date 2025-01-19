using Application.Repositories;
using Application.Services;
//using CloudinaryDotNet;
//using CloudinaryDotNet.Actions;
using Domain.DTOs;
using System.Security.Principal;
using System.IO;
using Domain.Entities.Concretes;
using System.Net.Http;

namespace Infrastructure.Services;

public class AudioService : IAudioService
{
    //private readonly Cloudinary _cloudinary;
    private readonly IAudioRepository _audioRepository;


    public AudioService(IAudioRepository audioRepository)
    {

        _audioRepository = audioRepository;
        
    }

    public async Task<string> DownloadAudioAsync(string path)
    {
        throw new NotImplementedException();
    }




    public Task<string> GetAudioAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<string> UploadAudioAsync(AddAudioDTO audioDTO)
    {
        Audio audio = new Audio()
        {
            Title = audioDTO.Title,
            FPath = audioDTO.FPath,
        };

        try
        {
            await _audioRepository.AddAsync(audio);
            await _audioRepository.SaveAllChangesAsync();
            return "Added Succesfuly";
        }
        catch (Exception ex)
        {

            return ex.Message;
        }
    }

    public async Task<List<AudioDTO>> GetAllAudiosAsync()
    {
        var audios = await _audioRepository.GetAllAsync();
        return audios.Select(audio => new AudioDTO
        {
            Id = audio.Id,
            Title = audio.Title,
            SecureUrl = audio.FPath
        }).ToList();
    }


}
