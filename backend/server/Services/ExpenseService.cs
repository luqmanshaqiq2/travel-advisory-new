using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Services
{
    public class ExpenseService : IExpenseService
    {
        private readonly ApplicationDbContext _context;

        public ExpenseService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Expense> CreateAsync(Expense expense)
        {
            _context.Expenses.Add(expense);
            await _context.SaveChangesAsync();
            return expense;
        }

        public async Task<IEnumerable<Expense>> GetAllAsync()
        {
            return await _context.Expenses.ToListAsync();
        }

        public async Task<Expense?> GetByIdAsync(int id)
        {
            return await _context.Expenses.FindAsync(id);
        }

        public async Task<Expense?> UpdateAsync(int id, Expense updated)
        {
            var existing = await _context.Expenses.FindAsync(id);
            if (existing == null)
                return null;

            existing.Name = updated.Name;
            existing.TimePeriod = updated.TimePeriod;
            existing.Booking = updated.Booking;
            existing.Food = updated.Food;
            existing.Travel = updated.Travel;

            await _context.SaveChangesAsync();
            return existing;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var expense = await _context.Expenses.FindAsync(id);
            if (expense == null)
                return false;

            _context.Expenses.Remove(expense);
            await _context.SaveChangesAsync();
            return true;
        }

        public decimal CalculateTotal(Expense e)
        {
            return e.Booking + e.Food + e.Travel;
        }
    }
}
