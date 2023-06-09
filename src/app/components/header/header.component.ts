import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onLogOut(): void {
    this.tokenService.logout();
    this.router.navigate(['/']).then(() => window.location.reload())
  }

  goToGithub() {
    window.open("https://github.com/Frsel99", "_blank")
  }
  goToLinkedin() {
    window.open("https://www.linkedin.com/in/francoleyesdev/", "_blank")
  }
}
