import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { EmployeeList } from './components/EmployeeList';
import { employees } from './data/employees';
import { Filters } from './types/filters';
import { filterEmployees } from './utils/filterEmployees';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [activeFilters, setActiveFilters] = useState<Filters>({
    department: '',
    experience: '',
    yearOfJoining: '',
    location: '',
    team: ''
  });

  const handleTeamChange = (team: string) => {
    setSelectedTeam(team);
    setActiveFilters(prev => ({ ...prev, team }));
  };

  const filteredEmployees = filterEmployees(employees, activeFilters).filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onFilterChange={setActiveFilters} />
      <div className="flex-1 flex flex-col">
        <Header selectedTeam={selectedTeam} onTeamChange={handleTeamChange} />
        <EmployeeList
          employees={filteredEmployees}
          onEdit={() => {}}
          onDelete={() => {}}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
    </div>
  );
}