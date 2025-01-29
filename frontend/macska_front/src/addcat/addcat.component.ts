import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatsSerivceService } from '../services/cats-serivce.service';
import { Cats } from '../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcat',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './addcat.component.html',
  styleUrl: './addcat.component.css'
})
export class AddcatComponent {
  constructor(private catsService: CatsSerivceService, private router: Router) {}

  cat: Cats = {
    id: 0,
    catname:'',
    catpicture:'',
    visits:0,
    description:''
  }
  onSubmit(){
    if(!this.cat.catname || !this.cat.catpicture || !this.cat.description){
      console.error('Hiba: Az űrlap nincs megfelelően kitöltve.')
      return;
    }
    this.catsService.addCat(this.cat).subscribe({
      next: (resp:any) =>{
        this.router.navigate(['/'])
      },
      error: (err: any) =>{
        console.log(err)
      },
      complete: ()=>{
        this.cat ={
          id: 0,
          catname: '',
          catpicture: '',
          visits: 0,
          description: ''
        }
      }
    })
  }
}
