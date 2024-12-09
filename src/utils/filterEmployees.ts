import { Employee } from '../types/employee';
import { Filters } from '../types/filters';

export function filterEmployees(employees: Employee[], filters: Filters): Employee[] {
  return employees.filter(employee => {
    const matchesDepartment = !filters.department || employee.designation.toLowerCase().includes(filters.department.toLowerCase());
    const matchesExperience = !filters.experience || matchExperienceRange(employee.experience, filters.experience);
    const matchesYear = !filters.yearOfJoining || employee.dateOfJoining === filters.yearOfJoining;
    const matchesLocation = !filters.location || employee.location?.toLowerCase() === filters.location.toLowerCase();
    const matchesTeam = !filters.team || employee.companyName.toLowerCase().includes(filters.team.toLowerCase());

    return matchesDepartment && matchesExperience && matchesYear && matchesLocation && matchesTeam;
  });
}

function matchExperienceRange(experience: string, filterValue: string): boolean {
  const exp = parseFloat(experience);
  switch (filterValue) {
    case '5+': return exp >= 5;
    case '3-5': return exp >= 3 && exp < 5;
    case '1-3': return exp >= 1 && exp < 3;
    case '0-1': return exp < 1;
    default: return true;
  }
}