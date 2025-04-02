using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SupplyManagementSystem.DataContext;
using SupplyManagementSystem.Models;

namespace SupplyManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostachanniaController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PostachanniaController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Postachannia>>> GetPostachannia()
        {
            return await _context.Postachannia.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Postachannia>> GetPostachannia(int id)
        {
            var postachannia = await _context.Postachannia.FindAsync(id);

            if (postachannia == null)
            {
                return NotFound();
            }

            return postachannia;
        }

        [HttpPost]
        public async Task<ActionResult<Postachannia>> PostPostachannia(Postachannia postachannia)
        {
            _context.Postachannia.Add(postachannia);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPostachannia), new { id = postachannia.Id }, postachannia);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutPostachannia(int id, Postachannia postachannia)
        {
            if (id != postachannia.Id)
            {
                return BadRequest();
            }

            _context.Entry(postachannia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostachanniaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePostachannia(int id)
        {
            var postachannia = await _context.Postachannia.FindAsync(id);
            if (postachannia == null)
            {
                return NotFound();
            }

            _context.Postachannia.Remove(postachannia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostachanniaExists(int id)
        {
            return _context.Postachannia.Any(e => e.Id == id);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Postachannia postachannia) // Без зайвих обгорток
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _context.Postachannia.Add(postachannia);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = postachannia.Id }, postachannia);
        }
    }
}