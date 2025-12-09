using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class AdvisoryService : IAdvisoryService
    {
        
            private readonly ApplicationDbContext _context;

            public AdvisoryService(ApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Advisory>> GetAllAsync()
            {
                return await _context.Advisories
                    .Include(a => a.Location)
                    .ToListAsync();
            }

            public async Task<Advisory?> GetByIdAsync(int id)
            {
                return await _context.Advisories
                    .Include(a => a.Location)
                    .FirstOrDefaultAsync(a => a.Id == id);
            }

            public async Task<Advisory> CreateAsync(Advisory advisory)
            {
                _context.Advisories.Add(advisory);
                await _context.SaveChangesAsync();
                return advisory;
            }

            public async Task<Advisory?> UpdateAsync(int id, Advisory advisory)
            {
                var existing = await _context.Advisories.FindAsync(id);
                if (existing == null) return null;

                existing.Title = advisory.Title;
                existing.Description = advisory.Description;
                existing.LocationId = advisory.LocationId;

                await _context.SaveChangesAsync();
                return existing;
            }

            public async Task<bool> DeleteAsync(int id)
            {
                var advisory = await _context.Advisories.FindAsync(id);
                if (advisory == null) return false;

                _context.Advisories.Remove(advisory);
                await _context.SaveChangesAsync();
                return true;
            }
        }
    }

