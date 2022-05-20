import {Component, OnInit} from '@angular/core';
import {IPostDetails} from "../../models/post-details.interface";
import {PostService} from "../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails | undefined;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(({id}) => {
      let state = router.getCurrentNavigation()?.extras.state;
      if (!state) {
        console.log('state is empty')
        postService.getPost(id).subscribe(value => this.postDetails = value as IPostDetails);
      } else {
        this.postDetails = state as IPostDetails;
      }
    })
  }

  ngOnInit(): void {
  }

}
