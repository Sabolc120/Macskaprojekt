import { Component, numberAttribute } from '@angular/core';
import { CatsSerivceService } from '../services/cats-serivce.service';
import { Cats } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-cat-page',
  imports: [],
  templateUrl: './cat-page.component.html',
  styleUrl: './cat-page.component.css'
})
export class CatPageComponent {
  constructor(private catsService: CatsSerivceService, private route: ActivatedRoute, private navigat: Router){}
  destroy$ = new Subject<void>
cats: Cats = {
  id: 0,
  catname:'',
  catpicture:'',
  visits:0,
  description:''
}
ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
  catId: number = 0;
  ngOnInit(){
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params=>{ 
      const idParam = params.get('id')
      this.catId = idParam ? +idParam : NaN
      this.getCat(this.catId)
    })
  }
  getCat(id: number){
    this.catsService.getCatAPI(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (resp: Cats)=>{
        this.cats = resp;
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  updateCat(id: number){
    this.catsService.updateCatVisit(id, {}).pipe(takeUntil(this.destroy$)).subscribe({
      next: (resp: Cats)=>{
        this.cats.visits+= 1;
      },
      error: (err: any)=>{
        console.log(err)
      }
    })
  }
  adoptCatMet(id: number){
    this.catsService.adoptCat(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: any)=>{
        console.log(res)
        this.navigat.navigate(['/'])
      },
      error: (err: any) =>{
        console.log(err)
      }
    })
  }
}
//Unsubscribe-okat kezeltük.
//RefreshPage-t kivesszük, frissiítjük az UI-t helyette.
//Vegyük ki a complete ágat, ugyanis, csak opcionális de rendezetlenebbé teszi a kódot.
