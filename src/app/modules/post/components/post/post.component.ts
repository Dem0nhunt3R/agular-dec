import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/post.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  getDetails(id: number) {
    this.router.navigate([id], {relativeTo: this.route, state: this.post});
  }
}
