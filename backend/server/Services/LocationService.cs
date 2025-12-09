using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class LocationService : ILocationService
    {
        private readonly ApplicationDbContext _context;

        public LocationService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Location>> GetAllAsync()
        {
            return await _context.Locations.ToListAsync();
        }

        public async Task<Location?> GetByIdAsync(int id)
        {
            return await _context.Locations.FindAsync(id);
        }

        public async Task<Location> CreateAsync(Location location)
        {
            _context.Locations.Add(location);
            await _context.SaveChangesAsync();
            return location;
        }

        public async Task<Location?> UpdateAsync(int id, Location updated)
        {
            var existing = await _context.Locations.FindAsync(id);
            if (existing == null) return null;

            existing.Name = updated.Name;
            existing.Description = updated.Description;

            await _context.SaveChangesAsync();
            return existing;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var existing = await _context.Locations.FindAsync(id);
            if (existing == null) return false;

            _context.Locations.Remove(existing);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
