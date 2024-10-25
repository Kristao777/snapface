import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap! : FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit(): void {
      this.mySnap = new FaceSnap(
        'Archibald',
        'My first face snap',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        1000
      );
      this.mySnap2 = new FaceSnap(
        'Asterix',
        'My second face snap',
        'https://cdn.pixabay.com/photo/2020/03/28/13/13/asterix-4976983_960_720.jpg',
        new Date(),
        100
      );
      this.mySnap3 = new FaceSnap(
        'Tintin',
        'My Third face snap',
        'https://cdn.pixabay.com/photo/2014/08/03/17/51/tintin-409248_960_720.jpg',
        new Date(),
        10
      );
      this.mySnap3.setLocation('Belgique');

  }
}
