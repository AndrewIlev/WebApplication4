using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupplyManagementSystem.DataContext;
using SupplyManagementSystem.Models;

[ApiController]
[Route("api/[controller]")]
public class PostachanniaController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public PostachanniaController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost]
    public async Task<ActionResult<Postachannia>> Create([FromBody] Postachannia item)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        _context.Postachannia.Add(item);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = item.Id }, item);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Postachannia item)
    {
        if (id != item.Id)
            return BadRequest();

        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        _context.Entry(item).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ItemExists(id))
                return NotFound();
            throw;
        }

        return NoContent();
    }

    private bool ItemExists(int id)
    {
        return _context.Postachannia.Any(e => e.Id == id);
    }
}