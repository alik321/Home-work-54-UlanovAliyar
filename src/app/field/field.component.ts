import { Component} from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  lengthList = 0;
  tries = 0;
  specialSquare = ':)';
  squares  = ["1","2",'3','4','5','6',
    '7','8','9','10','11','12',
    '13','14','15','16','17','18',
    '19','20','21','22','23','24',
    '25','26','27','28','29','30',
    '31','32','33','34','35','36'
  ];

  generateSquare(){
    this.lengthList = this.squares.length;
    this.guessSquare();
  }

  guessSquare(){
    const number = Math.floor(Math.random() * this.squares.length);
    this.squares[number] = this.specialSquare;
  }

  deleteSquare(index: number, event: Event){
    if(index){
      const target = <HTMLButtonElement> event.target;
      target.style.background = 'white';
      this.tries++;
    }

  }

  resetGame() {
    this.lengthList = 0;
    this.tries = 0;
  }
}
