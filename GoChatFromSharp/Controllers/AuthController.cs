using Microsoft.AspNetCore.Mvc;
using GoChatFromSharp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace GoChatFromSharp.Controllers
{
    [Route("api/user/register")]
    [ApiController]
    public class RegController : ControllerBase
    {
        private readonly UserManager<UserModel> _userManager;

        public RegController(UserManager<UserModel> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> Auth(RegModel regModel)
        {
            var user = new UserModel { Username = regModel.Username, Email = regModel.Email, Password = regModel.Email };

            var result = await _userManager.CreateAsync(user, regModel.Password);

            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }
    }

    [Route("api/user/login")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly UserManager<UserModel> _userManager;
        public LoginController(UserManager<UserModel> userManager)
        {
            _userManager = userManager;
        }
        [HttpPost]
        public IActionResult Login(LoginModel loginModel)
        {
            if (DatabaseList.Users.Any(u => u.Password == loginModel.Password && u.Email == loginModel.Email))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
    [Route("api/user/settings")]
    [ApiController]
    public class SettingsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUserSettings()
        {
            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateUserSettings(UserSettingsModel settings)
        {
            return Ok();
        }
    }
    [Route("api/friends")]
    [ApiController]
    public class FriendsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllFriends()
        {
            return Ok();
        }

        [HttpPost("add")]
        public IActionResult AddFriend(int friendId)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteFriend(int id)
        {
            return Ok();
        }
    }

    [Route("api/groups")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllGroups()
        {
            return Ok();
        }

        [HttpPost("create")]
        public IActionResult CreateGroup(GroupModel group)
        {
            return Ok();
        }

        [HttpPost("enter/{id}")]
        public IActionResult EnterGroup(int id)
        {
            return Ok();
        }

        [HttpDelete("exit/{id}")]
        public IActionResult ExitGroup(int id)
        {
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteGroup(int id)
        {
            return Ok();
        }
    }
    [Route("api/messages")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        [HttpGet("{id}/{isGroup}")]
        public IActionResult GetMessages(int id, bool isGroup)
        {
            return Ok();
        }
    }

}
