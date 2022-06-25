import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, isDevMode, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgressBarService } from '../progress-bar.service';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements AfterViewChecked, OnDestroy {

  onProgress: boolean;
  subscription: Subscription;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router,
    private cdRef: ChangeDetectorRef,
    private progressBarService: ProgressBarService) {

    this.subscription = this.progressBarService.progressAnnounced$.subscribe(data => this.onProgress = data);
  }

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  logout() {
    this.router.navigate(['login']);
  }

  getUser() {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  color() {
    return isDevMode() ? '{\'background-color\': #3F51B5;}' : '{\'background-color\': #46BD4E;}';
  }

  isDevMode() {
    return isDevMode();
  }
}
