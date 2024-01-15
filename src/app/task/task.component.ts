import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  providers:[ServiceService]
})
export class TaskComponent {
  constructor(private service:ServiceService){}
  name = new FormControl('');

  task : Task[] = [
    {
      id:1,
      name:'Test',
      description:'testDe'
    },
    {
      id:1,
      name:'Test1',
      description:'testDe1'
    }
  ]


}
