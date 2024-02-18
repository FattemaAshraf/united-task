using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class EmployeeController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EmployeeController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _context.Employees.ToListAsync();
            return Ok(employees);
        }
        

        [HttpPost]
        [Route("Create")]

        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            if (employeeRequest == null)
                return BadRequest("Invalid request body");
            if (!ModelState.IsValid)
                return BadRequest("Please add Correct Data");

            await _context.Employees.AddAsync(employeeRequest);
            await _context.SaveChangesAsync();

            return Ok(employeeRequest);

        }
        
        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetEmployee([FromRoute] int id)
        {
            var employee =
                await _context.Employees.FirstOrDefaultAsync(x => x.Id == id);
            if (employee == null) return NotFound();
            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] int id, Employee updateEmployee)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null) return NotFound();

            employee.JobTitleId = updateEmployee.JobTitleId;
            employee.DepartmentId = updateEmployee.DepartmentId;
            employee.HireDate = updateEmployee.HireDate;
            employee.Email = updateEmployee.Email;
            employee.Code = updateEmployee.Code;
            employee.Name = updateEmployee.Name;
            employee.MobileNumber = updateEmployee.MobileNumber;
            employee.NationalId = updateEmployee.NationalId;

            await _context.SaveChangesAsync();
            return Ok("Updated Successfully");
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null) return NotFound();

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();
            return Ok("Deleted Successfully");
        }

        [HttpGet]
        [Route("Count")]
        public async Task<IActionResult> GetEmployeeCount()
        {
            var employeeCount = await _context.Employees.CountAsync();
            return Ok(employeeCount);
        }


        [HttpGet]
        [Route("ByCurrentDate")]
        public async Task<IActionResult> GetEmployeesByCurrentDate()
        {
            DateTime currentDate = DateTime.Now.Date;

            var employeesByCurrentDateCount = await _context.Employees
                .Where(x => x.HireDate.Date == currentDate)
                .CountAsync();

            return Ok(employeesByCurrentDateCount);
        }

        [HttpGet]
        [Route("DepartmentId/{departmentId:int}")]
        public async Task<IActionResult> GetEmployeesByDepartmentId(int departmentId)
        {
            var employeesByDepartment = await _context.Employees
                                                      .Where(x => x.DepartmentId == departmentId)
                                                      .ToListAsync();

            return Ok(employeesByDepartment);
        }
    }
}
