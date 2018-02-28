import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public startValue: number;
  public height: number;
  public validHeight: boolean = true;
  public result: string[];

  public calculate() {        
    if(this.height > 2) {
      this.validHeight = true;
      this.result = [];            
      let x = this.startValue;
      let num: number;      

      for(let row = 2;row <= this.height; row++) {  
        num = x * row;      
        this.result.push(x + ' * ' + row + ' = ' + num);
        x = num;
      }
      for(let row = 2;row <= this.height; row++) {      
        num = x / row;  
        this.result.push(x + ' / ' + row + ' = ' + num);
        x = num;
      }
    }else{
      this.validHeight = false;
    }
  }

}
