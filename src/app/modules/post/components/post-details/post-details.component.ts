import {Component, OnInit} from '@angular/core';
import {IPostDetails} from "../../models/post-details.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postDetails: IPostDetails;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.route.data.subscribe(({postData}) => this.postDetails = postData);
  }

}
