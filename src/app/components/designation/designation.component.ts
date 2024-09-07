import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IAPIRespondsModel } from '../../model/Interface/APIResponsModel';
import { IDesignation } from '../../model/Interface/designation';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (result: IAPIRespondsModel) => {
        this.designationList = result.data;
      },
      (error) => {
        alert('API error/ Network down');
      }
    );
  }
}
