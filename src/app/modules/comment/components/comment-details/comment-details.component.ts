import {Component, OnInit} from '@angular/core';
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ICommentDetails} from "../../models/comment-details.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  commentDetails: ICommentDetails | undefined;

  constructor(private commentService: CommentService, private router: Router, private route: ActivatedRoute) {
    let state = router.getCurrentNavigation()?.extras.state;
    if (!state) {
      console.log('state if empty');
      route.params.subscribe(({id}) => {
        commentService.getComment(id).subscribe(value => this.commentDetails = value as ICommentDetails)
      });
    } else {
      this.commentDetails = state as ICommentDetails;
    }
  }

  ngOnInit(): void {
  }

}
