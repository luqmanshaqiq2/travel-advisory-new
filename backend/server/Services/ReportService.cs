using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class ReportService : IReportInterface
    {
        private readonly ApplicationDbContext _context;

        public ReportService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Report>> GetAllAsync()
        {
            return await _context.Reports.ToListAsync();
        }

        public async Task<Report?> GetByIdAsync(int id)
        {
            return await _context.Reports.FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task<Report> CreateAsync(Report report)
        {
            _context.Reports.Add(report);
            await _context.SaveChangesAsync();
            return report;
        }

        public async Task<Report?> UpdateAsync(int id, Report report)
        {
            var existing = await _context.Reports.FindAsync(id);
            if (existing == null) return null;

            existing.From = report.From;
            existing.To = report.To;
            existing.Description = report.Description;
            existing.UserId = report.UserId;
            existing.Status = report.Status;
            existing.PhotoUrl = report.PhotoUrl;

            await _context.SaveChangesAsync();
            return existing;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var report = await _context.Reports.FindAsync(id);
            if (report == null) return false;

            _context.Reports.Remove(report);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
