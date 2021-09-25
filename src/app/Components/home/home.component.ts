import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserResponseModel } from 'src/app/Models/ResponseModels/sign-up-response';
import { HomeService } from 'src/app/Services/Home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user : UserResponseModel;
  constructor(private service: HomeService, private router:Router,private modalService:NgbModal) { }
  
  ngOnInit(): void {
    this.service.GetUserDetails().subscribe(
      response=>{
        console.log(response);
        this.user=response;
      },
      err=>{
        alert("Cant't Get User Details")
      }
    );
  }

}
