import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://visitduluth.com/', 'https://en.wikipedia.org/wiki/Lake_Superior', 'https://www.scientificamerican.com/', 'https://www.budgetbytes.com/'];
  constructor() { }

  ngOnInit() {
  }

}
