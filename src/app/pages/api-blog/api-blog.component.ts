import {Component, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {BlogApi} from '../../interfaces/blog-api';

@Component({
  selector: 'app-api-blog',
  templateUrl: './api-blog.component.html',
  styleUrls: ['./api-blog.component.scss']
})
export class ApiBlogComponent implements OnInit {

  allData: BlogApi[] = [];

  constructor(
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.getAllBlogFromApi();

  }

  private getAllBlogFromApi() {
    this.blogService.getAllBlogFromApi()
      .subscribe({
        next: (res) => {
          this.allData = res;
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

}
