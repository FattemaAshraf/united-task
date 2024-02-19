
export interface IEmployee {
    email: string,
    code: number,
    departmentId: number,
    mobileNumber: string,
    hireDate: Date,
    nationalId: string,
    jobTitleId: number,
    id: number,
    name: string
}
export interface IEmployeesResponse {
  totalEmployees: number,
  pageIndex: number,
  pageSize: number,
  employees: IEmployee[]
}
