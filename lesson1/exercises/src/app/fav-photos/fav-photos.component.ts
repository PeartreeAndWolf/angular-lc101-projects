import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'I am not 3 opossums stacked on top of each other in a trench coat.';
  image1 = 'https://t4.ftcdn.net/jpg/03/23/80/77/240_F_323807773_mCcuV7HfQnCqt4IcLIIKONYAaDTQva1X.jpg';
  image2 = 'https://t4.ftcdn.net/jpg/00/56/96/27/240_F_56962791_o8syVNM8Ojo19TxJhLy1JW6RPHOin2zS.jpg';
  image3 = 'https://t4.ftcdn.net/jpg/02/71/74/13/240_F_271741306_OrcG9262uRAN5nPA0L5uuY4m7YldvrcA.jpg';

  constructor() { }

  ngOnInit() {
  }

}