using Domain.Entities.Abstracts;

namespace Domain.Entities.Concretes;

public class Favorite :  BaseEntity
{
    public int AppUserId { get; set; }

    
    //Foreign Key

    
    
    //Navigation Property

    public ICollection<Audio> Audios { get; set; }
}
