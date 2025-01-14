using Domain.Entities.Abstracts;

namespace Domain.Entities.Concretes;

public class Comment : BaseEntity
{
    public string Text { get; set; }

    public string AppUserId { get; set; }


    //Foreign Key
    public int AudioId { get; set; }



    //Navigation Property
    public Audio Audio { get; set; }

}
