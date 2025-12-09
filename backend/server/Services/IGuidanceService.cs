using server.Models;

namespace server.Services
{
    public interface IGuidanceService
    {
        Task<IEnumerable<Guidance>> GetAllAsync();
        Task<Guidance?> GetByIdAsync(int id);
        Task<Guidance> CreateAsync(Guidance guidance);
        Task<Guidance?> UpdateAsync(int id, Guidance guidance);
        Task<bool> DeleteAsync(int id);
    }
}
