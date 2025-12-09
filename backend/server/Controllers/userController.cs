using Microsoft.AspNetCore.Mvc;
using server.Services; // Ensure this is present and correct

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        // The service is injected via the interface (dependency inversion)
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(string), 200)]
        public IActionResult GetUser(int id)
        {
            // Call the service method
            var userName = _service.GetUserName(id);
            return Ok(userName);
        }
    }
}