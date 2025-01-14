using Domain.Entities.Abstracts;

namespace Domain.Entities.Concretes;

public class Playlist :  BaseEntity
{
    public string Title { get; set; }

    public int AppUserId { get; set; }


    //Foreign Key

    //Navigation Property
    public ICollection<Audio> Audios { get; set; }

}
