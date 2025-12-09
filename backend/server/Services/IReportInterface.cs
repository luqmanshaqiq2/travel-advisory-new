using server.Models;

namespace server.Services
{
    public interface IReportInterface
    {
        Task<IEnumerable<Report>> GetAllAsync();
        Task<Report?> GetByIdAsync(int id);
        Task<Report> CreateAsync(Report report);
        Task<Report?> UpdateAsync(int id, Report report);
        Task<bool> DeleteAsync(int id);
    }
}
