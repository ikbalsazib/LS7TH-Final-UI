import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Blog} from '../interfaces/blog';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {

  @Input() cardData: Blog;
  @Output() onSelectPost = new EventEmitter();

  constructor(
    private blogService: BlogService
  ) {
  }

  onClickPost() {
    this.onSelectPost.emit(this.cardData);
  }

  onDeletePost() {
    this.blogService.deleteBlog(this.cardData.id)
  }
}
