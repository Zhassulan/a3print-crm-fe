import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {finalize, Subscription} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.API_URL;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input()
  requiredFileType: string;
  fileName = '';
  uploadProgress = 0;
  uploadSub: Subscription;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('thumbnail', file);

      const upload$ = this.http.post(API_URL + '/v1/file-upload', formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );

      // tslint:disable-next-line:no-shadowed-variable
      this.uploadSub = upload$.subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
      });
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub.unsubscribe();
  }
}
