using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreReact.Controllers.Pages
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}