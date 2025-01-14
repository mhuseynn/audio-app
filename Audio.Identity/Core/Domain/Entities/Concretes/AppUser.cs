using Domain.Entities.Abstracts;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities.Concretes;


public class AppUser : IdentityUser<int>,IBaseEntity
{
    public DateTime CreatedDate { get; set; } = DateTime.Now;
    public DateTime UpdatedDate { get; set; } 
    public bool IsDeleted { get; set; }

}
