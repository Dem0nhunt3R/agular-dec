import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {ICommentDetails} from "../../models";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let element = this.router.getCurrentNavigation()?.extras.state?.['data'] as ICommentDetails;
      if (!element) {
        this.commentService.getComment(value['id']).subscribe(comment => this.commentDetails = comment as ICommentDetails);
      } else {
        this.commentDetails = element;
      }
    })

  }

}
