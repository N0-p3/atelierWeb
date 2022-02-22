import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ArticleRead } from '../models/article/articleRead';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.scss']
})
export class MyArticlesComponent implements OnInit {

  createForm: FormGroup;
  articles: [ArticleRead];

  constructor(private articleService: ArticleService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required)
    });

    this.articleService.readMyArticles().subscribe({
      next: (articlesReceived) => {
        this.articles = articlesReceived;
      }
    });
  }

  createOneArticle(): void {
    if (this.createForm.valid) {
      this.articleService.createOne(this.createForm.value).subscribe({
        next: () => {
          this.snackBar.open('Création d\'un article fait avec succès!', 'Cool!', { duration: 5000, panelClass: 'panel-success' });
          window.location.reload();
        },
        error: () => {
          this.snackBar.open('La Création d\'un article fut erreur', 'Awwnnn!', { duration: 5000, panelClass: 'panel-error' });
        }
      });
    }
  }

  deleteArticle(id: string): void {
    console.log(id);
  }
}
