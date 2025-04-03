using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupplyManagementSystem.DataContext;
using SupplyManagementSystem.Models;

[ApiController]
[Route("api/[controller]")]
public class SposhivachiController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public SposhivachiController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Sposhivachi>>> GetAll()
    {
        return await _context.Sposhivachi.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Sposhivachi>> GetById(int id)
    {
        var item = await _context.Sposhivachi.FindAsync(id);
        return item == null ? NotFound() : item;
    }

    [HttpPost]
    public async Task<ActionResult<Sposhivachi>> Create([FromBody] Sposhivachi item)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        _context.Sposhivachi.Add(item);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Sposhivachi item)
    {
        if (id != item.Id) return BadRequest();
        if (!ModelState.IsValid) return BadRequest(ModelState);

        _context.Entry(item).State = EntityState.Modified;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var item = await _context.Sposhivachi.FindAsync(id);
        if (item == null) return NotFound();

        _context.Sposhivachi.Remove(item);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool Exists(int id) => _context.Sposhivachi.Any(e => e.Id == id);
}