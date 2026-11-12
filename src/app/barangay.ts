import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Barangay {
    private http = inject(HttpClient);
    private apiURL = 'http://localhost:5000/api/barangay';

    barangayForums = signal<any[]>([]);

    fetchBarInfo(){
        this.http.get<any[]>(this.apiURL).subscribe(data => this.barangayForums.set(data));
    }
    saveBarInfo(data: any){
        return this.http.post(this.apiURL, data);
    }
    deleteBarInfo(id: string){
        return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
    updateBarInfo(id: string, data: any){
        return this.http.put(`${this.apiURL}/${id}`, data);
    }
}
