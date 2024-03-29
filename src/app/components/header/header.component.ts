import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  subscription: Subscription | undefined;
  title: string = 'Task Tracker';
  showAddTask: boolean = true;
  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggleAddTask().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
