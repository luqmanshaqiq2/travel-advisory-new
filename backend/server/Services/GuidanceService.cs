using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class GuidanceService : IGuidanceService
    {
        private readonly ApplicationDbContext _context;

        public GuidanceService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Guidance>> GetAllAsync()
        {
            return await _context.Guidances.ToListAsync();
        }

        public async Task<Guidance?> GetByIdAsync(int id)
        {
            return await _context.Guidances.FindAsync(id);
        }

        public async Task<Guidance> CreateAsync(Guidance guidance)
        {
            _context.Guidances.Add(guidance);
            await _context.SaveChangesAsync();
            return guidance;
        }

        public async Task<Guidance?> UpdateAsync(int id, Guidance updated)
        {
            var existing = await _context.Guidances.FindAsync(id);
            if (existing == null) return null;

            existing.Description = updated.Description;

            await _context.SaveChangesAsync();
            return existing;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var existing = await _context.Guidances.FindAsync(id);
            if (existing == null) return false;

            _context.Guidances.Remove(existing);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
