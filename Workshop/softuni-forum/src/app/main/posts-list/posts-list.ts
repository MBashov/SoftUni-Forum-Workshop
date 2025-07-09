import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/post';
import { Loader } from '../../shared/loader/loader';

@Component({
    selector: 'app-posts-list',
    imports: [Loader],
    templateUrl: './posts-list.html',
    styleUrl: './posts-list.css'
})
export class PostsList implements OnInit {
    posts: Post[] = [];
    isLoading: boolean = true;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getPosts(5).subscribe((posts: Post[]) => {
            this.posts = posts;
            this.isLoading = false;
        });
    }
}
