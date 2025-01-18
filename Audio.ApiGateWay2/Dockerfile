# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
#EXPOSE 8080
#
#
## This stage is used to build the service project
#FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
#ARG BUILD_CONFIGURATION=Release
#WORKDIR /src
#COPY ["Audio.ApiGateWay2/Audio.ApiGateWay2.csproj", "Audio.ApiGateWay2/"]
#RUN dotnet restore "./Audio.ApiGateWay2/Audio.ApiGateWay2.csproj"
#COPY . .
#WORKDIR "/src/Audio.ApiGateWay2"
#RUN dotnet build "./Audio.ApiGateWay2.csproj" -c $BUILD_CONFIGURATION -o /app/build
#
## This stage is used to publish the service project to be copied to the final stage
#FROM build AS publish
#ARG BUILD_CONFIGURATION=Release
#RUN dotnet publish "./Audio.ApiGateWay2.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false
#
## This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "Audio.ApiGateWay2.dll"]

# Use the official .NET runtime as the base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use the .NET SDK to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the project file and restore the dependencies
COPY ["Audio.ApiGateWay2/Audio.ApiGateWay2.csproj", "Audio.ApiGateWay2/"]
RUN dotnet restore "Audio.ApiGateWay2/Audio.ApiGateWay2.csproj"

# Copy the rest of the source code
COPY . . 
WORKDIR "/src/Audio.ApiGateWay2"
RUN dotnet build "Audio.ApiGateWay2.csproj" -c Release -o /app/build

# Publish the application to the /app/publish directory
FROM build AS publish
RUN dotnet publish "Audio.ApiGateWay2.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Final stage: set up the runtime image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Set the entry point for the container
ENTRYPOINT ["dotnet", "Audio.ApiGateWay2.dll"]
