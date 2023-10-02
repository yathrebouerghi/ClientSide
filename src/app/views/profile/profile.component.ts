import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  userId:any;
  user:any;
  constructor(private _service:AuthService){}
  ngOnInit(): void {
    this.user=this._service.getUser();
  }

}
