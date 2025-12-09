using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _db;

        public UserService(ApplicationDbContext db)
        {
            _db = db;
        }

        public IEnumerable<Users> GetAll()
        {
            return _db.Users.ToList();
        }

        public Users? GetUserById(int id)
        {
            return _db.Users.FirstOrDefault(u => u.Id == id);
        }

        public Users? GetUserEmail(string email)
        {
            return _db.Users.FirstOrDefault(u => u.Email == email);
        }

        public string? GetUserName(int id)
        {
            return _db.Users
                      .Where(u => u.Id == id)
                      .Select(u => u.Name)
                      .FirstOrDefault();
        }
    }
}
