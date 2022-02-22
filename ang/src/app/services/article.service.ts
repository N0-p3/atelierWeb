import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleComponent } from '../article/article.component';
import { ArticleCreate } from '../models/article/articleCreate';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get('/api/articles');
  }

  readMyArticles(): Observable<any> {
    return this.httpClient.get('/api/myArticles');
  }

  createOne(article: ArticleCreate): Observable<any> {
    return this.httpClient.post('/api/articles', article);
  }
}
