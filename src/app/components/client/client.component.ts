import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IAPIRespondsModel } from '../../model/Interface/APIResponsModel';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: IAPIRespondsModel) => {
      this.clientList = res.data;
    });
  }

  onSaveClient() {
    debugger;
    this.clientService
      .addUpdateClient(this.clientObj)
      .subscribe((res: IAPIRespondsModel) => {
        if (res.result) {
          alert('client created success');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
  }

  onDelete(id: number) {
    const deleting = confirm('are you sure you want to delete?');
    if (deleting) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: IAPIRespondsModel) => {
          if (res.result) {
            alert('client was deleted');
            this.loadClient();
          } else {
            alert(res.message);
          }
        });
    }
  }

  onEdit(data: Client){
    this.clientObj = data;
  }
}
