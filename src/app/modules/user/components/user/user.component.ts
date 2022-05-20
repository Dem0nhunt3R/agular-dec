import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

  }

  getDetails(id: number) {
    this.router.navigate([id], {relativeTo: this.route, state: this.user})
  }
}
