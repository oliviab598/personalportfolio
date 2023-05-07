import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  goToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/oliviab598/';
  }

  sendEmail() {
    window.location.href = 'mailto:Obrown3@oberlin.edu?subject=Hello&body=Hi%20there%2C%0D%0A%0D%0AHope%20you%20are%20doing%20well.%0D%0A%0D%0ABest%20regards%2C%0D%0A[Your%20Name]';
  }
}
