import {Component, OnInit} from '@angular/core';
import {IUserDetails} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let element: IUserDetails = this.router.getCurrentNavigation()?.extras.state?.['data'];
      if (!element) {
        this.userService.getUser(value['id']).subscribe(value1 => this.userDetails = value1 as IUserDetails);
      } else {
        this.userDetails = element as IUserDetails;
      }
    })
  }

}
