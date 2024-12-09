export interface Filters {
  department: string;
  experience: string;
  yearOfJoining: string;
  location: string;
  team: string;
}

export interface FilterChangeHandler {
  (filters: Filters): void;
}