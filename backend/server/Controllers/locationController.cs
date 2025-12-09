using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocationController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public LocationController(ApplicationDbContext db)
        {
            _db = db;
        }

        // GET: api/location
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var locations = await _db.Locations.ToListAsync();
            return Ok(locations);
        }

        // GET: api/location/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var location = await _db.Locations.FindAsync(id);
            if (location == null) return NotFound();

            return Ok(location);
        }

        // POST: api/location
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Location location)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _db.Locations.Add(location);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = location.Id }, location);
        }

        // PUT: api/location/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Location updated)
        {
            if (id != updated.Id)
                return BadRequest("ID mismatch");

            var exists = await _db.Locations.AnyAsync(l => l.Id == id);
            if (!exists) return NotFound();

            _db.Entry(updated).State = EntityState.Modified;
            await _db.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/location/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var location = await _db.Locations.FindAsync(id);
            if (location == null) return NotFound();

            _db.Locations.Remove(location);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
