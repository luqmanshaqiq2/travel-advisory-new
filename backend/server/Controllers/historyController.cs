using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistoryController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public HistoryController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/history
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var list = await _db.Histories
                .Include(h => h.users)
                .ToListAsync();

            return Ok(list);
        }

        // GET: api/history/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var history = await _db.Histories
                .Include(h => h.users)
                .FirstOrDefaultAsync(h => h.Id == id);

            if (history == null)
                return NotFound();

            return Ok(history);
        }

        // POST: api/history
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] History history)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.Histories.Add(history);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = history.Id }, history);
        }

        // DELETE: api/history/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var record = await _db.Histories.FindAsync(id);
            if (record == null)
                return NotFound();

            _db.Histories.Remove(record);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
