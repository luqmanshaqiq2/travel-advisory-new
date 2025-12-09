using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class AuthService
    {
        private readonly ApplicationDbContext _db;
        private readonly IConfiguration _config; // for JWT secret

        public AuthService(ApplicationDbContext db, IConfiguration config)
        {
            _db = db;
            _config = config;
        }

        public async Task<Users> RegisterAsync(RegisterModel model)
        {
            if (await _db.Users.AnyAsync(u => u.Email == model.Email))
                throw new Exception("Email already registered");

            var user = new Users
            {
                Name = model.Name,
                Email = model.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.Password)
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            return user;
        }

        public async Task<string> LoginAsync(LoginModel model)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
            if (user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.PasswordHash))
                throw new Exception("Invalid credentials");

            // generate JWT token here
            var token = JwtHelper.GenerateToken(
    user,
    _config["Jwt:Key"]!,     // <- note the !
    _config["Jwt:Issuer"]!   // <- note the !
);

            return token;
        }
    }
}
