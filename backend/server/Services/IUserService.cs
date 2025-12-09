using server.Models;

namespace server.Services
{
    public interface IUserService
    {
        IEnumerable<Users> GetAll();
        Users? GetUserById(int id);
        Users? GetUserEmail(string email);
        string? GetUserName(int id);

    }
}
