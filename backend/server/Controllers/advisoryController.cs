using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

[ApiController]
[Route("api/[controller]")]
public class AdvisoryController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public AdvisoryController(ApplicationDbContext db)
    {
        _db = db;
    }

    // GET: api/advisory
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var advisories = await _db.Advisories
            .Include(a => a.Location)
            .ToListAsync();

        return Ok(advisories);
    }

    // GET: api/advisory/{id}
    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var advisory = await _db.Advisories
            .Include(a => a.Location)
            .FirstOrDefaultAsync(a => a.Id == id);

        if (advisory == null)
            return NotFound();

        return Ok(advisory);
    }

    // POST: api/advisory
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Advisory advisory)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        _db.Advisories.Add(advisory);
        await _db.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = advisory.Id }, advisory);
    }

    // PUT: api/advisory/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Advisory updated)
    {
        if (id != updated.Id)
            return BadRequest("ID mismatch");

        var exists = await _db.Advisories.AnyAsync(a => a.Id == id);
        if (!exists)
            return NotFound();

        _db.Entry(updated).State = EntityState.Modified;
        await _db.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/advisory/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var advisory = await _db.Advisories.FindAsync(id);
        if (advisory == null)
            return NotFound();

        _db.Advisories.Remove(advisory);
        await _db.SaveChangesAsync();

        return NoContent();
    }
}
