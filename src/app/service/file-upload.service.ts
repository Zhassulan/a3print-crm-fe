import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {
  }

  upload(file): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(environment.API_URL, formData);
  }
}
