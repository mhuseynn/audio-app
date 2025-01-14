using Domain.Entities.Abstracts;

namespace Domain.Entities.Concretes;

public class Audio : BaseEntity
{
    public string Title { get; set; }

    public string Artist { get; set; }

    public string FPath { get; set; }


    //Foreign Key
    public int PlaylistId { get; set; }
    public int FavoriteId { get; set; }


    //Navigation Property
    public Playlist Playlist { get; set; }
    public Favorite Favorite { get; set; }
}
