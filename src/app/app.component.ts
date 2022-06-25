import {Title} from '@angular/platform-browser';
import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

    constructor(private titleService: Title) {
    }

    ngOnInit(): void {    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    ngAfterViewInit(): void {
    }
}
