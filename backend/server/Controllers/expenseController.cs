using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpenseController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public ExpenseController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/expense
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var expenses = await _db.Expenses.ToListAsync();
            return Ok(expenses);
        }

        // GET: api/expense/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var expense = await _db.Expenses.FindAsync(id);
            if (expense == null) return NotFound();

            return Ok(expense);
        }

        // POST: api/expense
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Expense expense)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.Expenses.Add(expense);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = expense.Id }, expense);
        }

        // PUT: api/expense/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Expense updated)
        {
            if (id != updated.Id)
                return BadRequest("ID mismatch");

            var exists = await _db.Expenses.AnyAsync(x => x.Id == id);
            if (!exists) return NotFound();

            _db.Entry(updated).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/expense/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var expense = await _db.Expenses.FindAsync(id);
            if (expense == null) return NotFound();

            _db.Expenses.Remove(expense);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
