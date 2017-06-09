using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreReact.Controllers.Pages
{
	public class UsersController : Controller
	{
		public IActionResult Index()
		{
			return Ok(s_users);
		}

		private static readonly List<string> s_users = new List<string>
		{
			"Ryan",
			"Sarah"
		};
	}
}