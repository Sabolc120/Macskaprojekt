import { Component, Input } from '@angular/core';
import { CatsSerivceService } from '../services/cats-serivce.service';
import { HttpClient } from '@angular/common/http';
import { Cats } from '../types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CatCardComponent } from "../cat-card/cat-card.component";

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, RouterModule, CatCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private catsService: CatsSerivceService){}

  public cats: Cats[] = []
  private destroy$ = new Subject<void>

  public ngOnInit(): void{
    this.getCatsOntoPage()
  }
  public ngOnDestroy(): void{
    this.destroy$.next();
    this.destroy$.complete();
  }
  public getCatsOntoPage(){
    this.catsService.getCatsAPI().pipe(takeUntil(this.destroy$)).subscribe({
      next: (resp: Cats[]) =>{
        this.catsService.setCats(resp)
        this.cats = resp
      },
      error: (err) => console.error(err),
    });
  }
}