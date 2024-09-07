import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/Interface/role';
import { CommonModule } from '@angular/common';
import { IAPIRespondsModel } from '../../model/Interface/APIResponsModel';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  //variables
  roleList: IRole[] = [];
  http = inject(HttpClient);

  //constructor
  //this is the old way of injecting httpClient
  // constructor(private http: HttpClient) {}

  //lifecycle
  ngOnInit(): void {
    this.getAllRoles();
  }

  //normal functions
  getAllRoles() {
    this.http
      .get<IAPIRespondsModel>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .subscribe((res: IAPIRespondsModel) => {
        this.roleList = res.data;
      });
  }
}
