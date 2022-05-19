import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPostDetails} from "../../models";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let element : IPostDetails = this.router.getCurrentNavigation()?.extras.state?.['data'];
      if (!element) {
        this.postService.getPost(value['id']).subscribe(data => this.postDetails = data as IPostDetails)
      } else
        this.postDetails = element;
    })
  }

}
