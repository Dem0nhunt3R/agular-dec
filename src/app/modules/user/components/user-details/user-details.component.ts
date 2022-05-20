import {Component, OnInit} from '@angular/core';
import {IUserDetails} from "../../models/user-details";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: IUserDetails | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(({id}) => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (!state) {
        this.userService.getUser(id).subscribe(value => this.userDetails = value as IUserDetails);
      } else {
        this.userDetails = state as IUserDetails;
      }
    })
  }

  ngOnInit(): void {
  }

}
