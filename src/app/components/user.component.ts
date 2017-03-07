import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {

  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  showOrHide: string;
  posts:Post[]

  constructor(private postsService: PostsService) {
    this.name = 'Renju';
    this.email = 'renju@gmail.com'
    this.address = {
      street: '15 Market St',
      city: 'Philadelphia',
      state: 'PA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
    this.showOrHide = 'Show hobbies';
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby:string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(index:number) {
    this.hobbies.splice(index, 1);
  }
 }

interface address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body:string
}
