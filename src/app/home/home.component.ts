import { Component, Input, OnInit } from '@angular/core';
import { Auth2Service } from '../auth2.service';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories$;
  @Input('category') category;
  constructor(public AuthService: Auth2Service,CatService:CategoryService) {
  this.categories$ = CatService.getcategories();
  }
  ngOnInit() {}
}
