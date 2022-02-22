import { Component, Input, OnInit } from '@angular/core';
import { ArticleRead } from '../models/article/articleRead';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() article: ArticleRead;

  constructor() {}

  ngOnInit(): void {}

  toDate(): string {
    let a = new Date(this.article.unixDate * 1000);
    return a.toLocaleDateString();
  }
}
