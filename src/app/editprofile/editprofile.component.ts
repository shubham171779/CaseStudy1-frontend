import { Component, OnInit } from '@angular/core';
import {postdata} from '../postdataService';
import {UsercartService} from '../usercart.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  contact;
  gender;
  userdata;
  userdata2;
  username;
  email;
  password;
  id;
  alluser;
  pdata: postdata;
  rdata;

  constructor(private user: UsercartService) {
  }

  ngOnInit() {
    this.user.getuser().subscribe(data => {
      this.userdata = data;
      this.id = this.userdata.id;
      this.email = this.userdata.email;
      this.password = this.userdata.password;
      this.username = this.userdata.username;
      this.contact = this.userdata.contact;
      this.gender = this.userdata.gender;

    });
  }

  edituser() {
    this.pdata = new postdata();
    this.pdata.username = this.username;
    this.pdata.email = this.email;
    this.pdata.password = this.password;
    this.pdata.contact = this.contact;
    this.pdata.gender = this.gender;
    console.log(this.pdata.gender);

    this.user.updateuser(this.id, this.pdata).subscribe(data => {
      this.rdata = data;

      alert('User profile updated successfully')
    });

  }
}
