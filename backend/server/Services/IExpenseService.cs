using server.Models;

namespace server.Services
{
    public interface IExpenseService
    {
        Task<Expense> CreateAsync(Expense expense);
        Task<IEnumerable<Expense>> GetAllAsync();
        Task<Expense?> GetByIdAsync(int id);
        Task<Expense?> UpdateAsync(int id, Expense updated);
        Task<bool> DeleteAsync(int id);
        decimal CalculateTotal(Expense expense);
    }
}
