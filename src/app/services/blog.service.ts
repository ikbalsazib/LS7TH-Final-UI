import { Injectable } from '@angular/core';
import {Blog} from '../interfaces/blog';
import {BLOGS} from '../data/data';
import {HttpClient} from '@angular/common/http';
import {BlogApi} from '../interfaces/blog-api';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private blogs: Blog[] = BLOGS;

  constructor(
    private http: HttpClient
  ) {

  }

  get allBlogs() {
    return this.blogs;
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog);
    console.log( this.blogs.length)
  }

  deleteBlog(index: number) {
    const fIndex = this.blogs.findIndex(f => f.id === index)
    this.blogs.splice(fIndex, 1);
  }


  getAllBlogFromApi() {
    return this.http.get<BlogApi[]>('https://jsonplaceholder.typicode.com/posts')
  }





}
