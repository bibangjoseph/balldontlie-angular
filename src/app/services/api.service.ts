import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private baseUrl = 'https://www.balldontlie.io/api/v1/';
	constructor(private http: HttpClient) { }
}
