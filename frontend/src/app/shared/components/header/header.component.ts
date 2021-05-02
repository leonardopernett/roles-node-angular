import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/pages/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 isAdmin:boolean  = false

  constructor(private Authservice:AuthService) { }

  ngOnInit(): void {
  }


  salir(){
    this.Authservice.logout()
  }

}
