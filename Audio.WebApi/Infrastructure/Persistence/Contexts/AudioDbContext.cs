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


    public virtual DbSet<Audio> Audios { get; set; }

    public virtual DbSet<Playlist> Playlists { get; set; }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Favorite> Favorites { get; set; }
}
