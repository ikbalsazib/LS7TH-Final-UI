import {Component, OnInit} from '@angular/core';
import {Blog} from '../../interfaces/blog';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{



  blogs: Blog[] = [];

  postVisibility: boolean = true;
  selectPost: Blog;

  constructor(
    private blogService: BlogService
  ) {
  }

  ngOnInit() {
    this.blogs = this.blogService.allBlogs;
  }

  onTogglePost() {
    console.log('onTogglePost() --> Call')
    this.postVisibility = !this.postVisibility;
  }

  onClickButtonShow() {
    this.postVisibility = true;
  }

  onClickButtonHide() {
    this.postVisibility = false;
  }


  onChildPotsClick(event: Blog) {
    this.selectPost = event;
  }

  addPost() {
    const blog: Blog = {
      id: Date.now(),
      title: 'Our mission supporting your vision 100',
      urlName: 'Bose Church audio solutions',
      url: 'https://pro.bose.com/en_us/solutions/bose-church.html',
      image: 'https://assets.bose.com/content/dam/Bose_DAM/Web/pro/global/solutions/bose_church/bose_church_tile.jpg/jcr:content/renditions/cq5dam.web.1000.1000.jpeg'
    }

    this.blogService.addBlog(blog);

  }
}
