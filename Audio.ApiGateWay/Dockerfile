# Use the official .NET runtime as a base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use the .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["Audio.App/Audio.GateWay/Audio.ApiGateWay/Audio.ApiGateWay.csproj", "Audio.App/Audio.GateWay/Audio.ApiGateWay/"]
RUN dotnet restore "Audio.App/Audio.GateWay/Audio.ApiGateWay/Audio.ApiGateWay.csproj"

# Copy the rest of the code
COPY . . 
WORKDIR "/src/Audio.App/Audio.GateWay/Audio.ApiGateWay"
RUN dotnet build "Audio.ApiGateWay.csproj" -c Release -o /app/build

# Publish the app
FROM build AS publish
RUN dotnet publish "Audio.ApiGateWay.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Final image with the published app
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Set the entry point for the container
ENTRYPOINT ["dotnet", "Audio.ApiGateWay.dll"]
