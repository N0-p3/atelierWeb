import { Component, OnInit } from '@angular/core';
import { ArticleRead } from '../models/article/articleRead';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articles: [ArticleRead];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.readAll().subscribe({
      next: (articlesJson) => {
        this.articles = articlesJson;
    }});
  }
  
}
