using server.Models;

namespace server.Services
{
    public interface IAdvisoryService
    {
         
        Task<IEnumerable<Advisory>> GetAllAsync();
        Task<Advisory?> GetByIdAsync(int id);
        Task<Advisory> CreateAsync(Advisory advisory);
        Task<Advisory?> UpdateAsync(int id, Advisory advisory);
        Task<bool> DeleteAsync(int id);
    }
}

