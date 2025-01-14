using Application.Repositories;
using Domain.Entities.Concretes;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class CommentRepository : GenericRepository<Comment>,ICommentRepository
{
    public CommentRepository(AudioDbContext audioDbContext) : base(audioDbContext)
    {
        
    }
}
