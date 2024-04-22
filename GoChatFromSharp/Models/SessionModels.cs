using System.ComponentModel.DataAnnotations;
namespace GoChatFromSharp.Models;
public class LoginModel
{
    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    public string Email { get; set; }
    [Required(ErrorMessage = "Password is required")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    public string ReturnUrl { get; set; }
}
public class RegModel
{
    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    public string Email { get; set; }
    [Required(ErrorMessage = "Username is required")]
    public string Username { get; set; }
    [Required(ErrorMessage = "Password is required")]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    [Required(ErrorMessage = "Confirm password is required")]
    [Compare("Password", ErrorMessage = "Password and confirm password do not match")]
    [DataType(DataType.Password)]
    public string ConfirmPassword { get; set; }
    public string ReturnUrl { get; set; }
}
public class UserModel
{
    public string Email { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string ReturnUrl { get; set; }
}

public class UserSettingsModel
{
    [Required(ErrorMessage = "Email is required")]
    [EmailAddress(ErrorMessage = "Invalid email address")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Password is required")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    public string Theme { get; set; }
    public bool EnableNotifications { get; set; }
}

public class GroupModel
{
    [Required(ErrorMessage = "Group name is required")]
    public string GroupID { get; set; }
    public string Name { get; set; }

    public string Description { get; set; }
}
public class MessageModel
{
    public int Id { get; set; }
    public bool IsGroup { get; set; }
    public string Content { get; set; }
    public DateTime Timestamp { get; set; }
}

public class FriendModel
{
    public int FriendId { get; set; }
    public string FriendName { get; set; }
}