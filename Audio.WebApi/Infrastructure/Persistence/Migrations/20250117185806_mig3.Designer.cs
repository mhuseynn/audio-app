﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence.Contexts;

#nullable disable

namespace Persistence.Migrations
{
    [DbContext(typeof(AudioDbContext))]
    [Migration("20250117185806_mig3")]
    partial class mig3
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Domain.Entities.Concretes.Audio", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Artist")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FPath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("FavoriteId")
                        .HasColumnType("int");

                    b.Property<int?>("PlaylistId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FavoriteId");

                    b.HasIndex("PlaylistId");

                    b.ToTable("Audios");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("AppUserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("AudioId")
                        .HasColumnType("int");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("AudioId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Favorite", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AppUserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Favorites");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Playlist", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("AppUserId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Playlists");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Audio", b =>
                {
                    b.HasOne("Domain.Entities.Concretes.Favorite", "Favorite")
                        .WithMany("Audios")
                        .HasForeignKey("FavoriteId");

                    b.HasOne("Domain.Entities.Concretes.Playlist", "Playlist")
                        .WithMany("Audios")
                        .HasForeignKey("PlaylistId");

                    b.Navigation("Favorite");

                    b.Navigation("Playlist");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Comment", b =>
                {
                    b.HasOne("Domain.Entities.Concretes.Audio", "Audio")
                        .WithMany()
                        .HasForeignKey("AudioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Audio");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Favorite", b =>
                {
                    b.Navigation("Audios");
                });

            modelBuilder.Entity("Domain.Entities.Concretes.Playlist", b =>
                {
                    b.Navigation("Audios");
                });
#pragma warning restore 612, 618
        }
    }
}
