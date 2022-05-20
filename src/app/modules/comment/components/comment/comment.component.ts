import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../models/comment.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  getDetails(id: number) {
    this.router.navigate([id], {relativeTo: this.route, state: this.comment})
  }
}