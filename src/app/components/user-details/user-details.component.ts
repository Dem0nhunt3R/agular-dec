import {Component, OnInit} from '@angular/core';
import {IUserDetails} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

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
    this.activatedRoute.params.subscribe(({id} )=> {
      console.log(id);
      let element = this.router.getCurrentNavigation()?.extras.state?.['data'] as IUserDetails;
      console.log(element)
      if (!id) {
        console.log('element is empty')
        this.userService.getUser(id)
          .subscribe(value1 => this.userDetails = value1 as IUserDetails);
      } else {
        this.userDetails = element;
      }
    })
  }

}
