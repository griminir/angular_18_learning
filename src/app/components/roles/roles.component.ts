import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  //variables
  firstName: string = 'viktor'; // do
  angularVersion = 'version 18'; // dont do

  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  inputType: string = 'button';
  selectedState: string = '';

  //constructor

  //something

  //normal functions
  showWelcomeAlert () {
    alert('welcome to angular 18 learning')
  }

  showMessage(message: string){
    alert(message)
  }
}
