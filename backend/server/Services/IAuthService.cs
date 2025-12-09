using Microsoft.AspNetCore.Identity.Data;
using server.DTO;
using server.Models;

namespace server.Services
{
    public interface IAuthService
    {
        Task<AuthResult> RegisterAsync(DTO.RegisterRequest request);
        Task<AuthResult> LoginAsync(DTO.LoginRequest request);
    }
}
