using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupplyManagementSystem.DataContext;
using SupplyManagementSystem.Models;

[ApiController]
[Route("api/[controller]")]
public class ProduktiController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProduktiController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produkti>>> GetAll()
    {
        return await _context.Produkti.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Produkti>> GetById(int id)
    {
        var item = await _context.Produkti.FindAsync(id);
        return item == null ? NotFound() : item;
    }

    [HttpPost]
    public async Task<ActionResult<Produkti>> Create([FromBody] Produkti item)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        _context.Produkti.Add(item);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Produkti item)
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
        var item = await _context.Produkti.FindAsync(id);
        if (item == null) return NotFound();

        _context.Produkti.Remove(item);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool Exists(int id) => _context.Produkti.Any(e => e.Id == id);
}