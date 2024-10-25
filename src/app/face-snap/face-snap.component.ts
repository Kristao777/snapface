import { Component, Input,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  hasSnapped?: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.hasSnapped = false;
  }

  onSnap(): void {
    if (this.hasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.hasSnapped = false;
}

snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.hasSnapped = true;
}
}
