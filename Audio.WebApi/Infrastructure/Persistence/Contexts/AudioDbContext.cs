using Domain.Entities.Concretes;
using Microsoft.EntityFrameworkCore;
using System;

namespace Persistence.Contexts;

public class AudioDbContext : DbContext
{

    public AudioDbContext(DbContextOptions<AudioDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }


    public DbSet<Audio> Audios { get; set; }

    public DbSet<Playlist> Playlists { get; set; }

    public DbSet<Comment> Comments { get; set; }

    public DbSet<Favorite> Favorites { get; set; }
}
