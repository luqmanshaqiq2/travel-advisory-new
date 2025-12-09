using server.Data;
using server.Models;

namespace server.Services
{
    public class HistoryService : IHistoryService
    {
        private readonly ApplicationDbContext _context;

        public HistoryService(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<History> AddTripAsync(int userId, History history)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteTripAsync(int tripId, int userId)
        {
            throw new NotImplementedException();
        }

        public Task<History> GetTripByIdAsync(int tripId, int userId)
        {
            throw new NotImplementedException();
        }

        public Task<List<History>> GetUserTripsAsync(int userId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateTripAsync(int tripId, int userId, History updatedTrip)
        {
            throw new NotImplementedException();
        }
    }
}
