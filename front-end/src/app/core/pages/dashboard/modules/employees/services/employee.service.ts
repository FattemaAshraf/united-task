import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private _httpClient: HttpClient ) { }

  onGetAllEmployees():Observable<IEmployee[]>{
    return this._httpClient.get<IEmployee[]>(`Employee/GetAllEmployees`)
  }
  onGetEmployee(id:number):Observable<IEmployee>{
    return this._httpClient.get<IEmployee>(`Employee/${id}`)
  }
  onAddEmployee(data:IEmployee):Observable<IEmployee>{
    return this._httpClient.post<IEmployee>(`Employee/Create`,data)
  }
  onUpdateEmployee(id:number,data:IEmployee):Observable<IEmployee>{
    return this._httpClient.put<IEmployee>(`Employee/Upadte/${id}`,data)
  }
  onDeleteEmployee(id:number):Observable<IEmployee>{
    return this._httpClient.delete<IEmployee>(`Employee/${id}`)
  }
  onCountEmployees():Observable<number>{
    return this._httpClient.get<number>(`Employee/Count`)
  }
  onCountEmployeesByCurrentYear():Observable<number>{
    return this._httpClient.get<number>('Employee/Count')
  }
  onGetEmployeesByDeptId(id:number):Observable<IEmployee[]>{
    return this._httpClient.get<IEmployee[]>(`Employee/DepartmentId/${id}`)
  }
}
