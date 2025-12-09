using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReportController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public ReportController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/report
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var reports = await _db.Reports.ToListAsync();
            return Ok(reports);
        }

        // GET: api/report/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var report = await _db.Reports.FindAsync(id);
            if (report == null) return NotFound();

            return Ok(report);
        }

        // POST: api/report
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Report report)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.Reports.Add(report);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = report.Id }, report);
        }

        // PUT: api/report/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Report updated)
        {
            if (id != updated.Id)
                return BadRequest("ID mismatch");

            var exists = await _db.Reports.AnyAsync(r => r.Id == id);
            if (!exists) return NotFound();

            _db.Entry(updated).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/report/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var report = await _db.Reports.FindAsync(id);
            if (report == null) return NotFound();

            _db.Reports.Remove(report);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
