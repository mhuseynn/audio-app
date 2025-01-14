using Application.RepositoriesApp.Concretes;
using Domain.Entities.Abstracts;
using Domain.Entities.Concretes;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Persistence.Repositories;



public class GenericRepository<T> : IGenericRepository<T> where T : class, IBaseEntity, new()
{
    protected AppDbContext _context;
    protected DbSet<T> _entity;
    public GenericRepository(AppDbContext context)
    {
        this._context = context;
        _entity = context.Set<T>();
    }

    public async Task AddAsync(T entity)
    {
        await _entity.AddAsync(entity);
    }

    public async Task DeleteAsync(int id)
    {
        var entity = await _entity.FirstOrDefaultAsync(x => x.Id == id);
        if (entity is not null)
            _entity.Remove(entity);
    }

    public async Task<IQueryable<T>> GetAllAsync()
    {
        return _entity;
    }

    public async Task<T?> GetAsync(int id)
    {
        return await _entity.FirstOrDefaultAsync(x => x.Id == id);
    }

    public async Task SaveAllChangesAsync()
    {
        await _context.SaveChangesAsync();
    }

    public async Task<T> UpdateAsync(T entity)
    {
        _entity.Update(entity);
        return entity;
    }
}
