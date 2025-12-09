using server.Models;
using System.Security.Cryptography;

namespace server.Services
{
    public interface IHistoryService
    {
        //Task = Promises
        Task<List<History>> GetUserTripsAsync(int userId);
        Task<History> GetTripByIdAsync(int tripId, int userId);
        Task<History> AddTripAsync(int userId, History history);
        Task<bool> UpdateTripAsync(int tripId, int userId, History updatedTrip);
        Task<bool> DeleteTripAsync(int tripId, int userId);

    }
}
