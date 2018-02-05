import { Component, OnInit } from '@angular/core';
import { EscortsService } from '../../services/escorts.service';
import { Modelos } from '../../Modelos';
@Component({
  selector: 'app-escorts',
  templateUrl: './escorts.component.html',
  styleUrls: ['./escorts.component.css']
})
export class EscortsComponent implements OnInit {
 modelos: Modelos[];
 Name: string;
 LastName: string;
 NickName: string;
 Age: number;
 BornDate: Date;
 Telephone: string;
 Residence: string;
 Nationality:string;
 Profession:string;
 Stature: string;
 Languages: string;
 Meausurements: Object;
 CostPerHour: number;
 Hotels: boolean;
 Departaments: boolean;
 Travels	: boolean;
 AgencyName: string;
 AgencyUrl: Object;
 Services: Object;

  constructor(private escortsService: EscortsService) {
    this.escortsService.getEscorts()
      .subscribe(modelos => {
        //console.log(modelos);
        this.modelos= modelos;
      })

   }

  ngOnInit() {
  }

  addEscorts(event){
    event.preventDefault();
    //console.log(this.name)
    const newEscort: Modelos = {
      Name: this.Name,
      LastName: this.LastName,
      NickName: this.NickName,
      Age: this.Age,
      BornDate: this.BornDate,
      Telephone: this.Telephone,
      Residence: this.Residence,
      Nationality: this.Nationality,
      Profession:this.Profession,
      Stature: this.Stature,
      Languages: this.Languages,
      Meausurements: this.Meausurements,
      CostPerHour: this.CostPerHour,
      Hotels: this.Hotels,
      Departaments: this.Departaments,
      Travels	: this.Travels,
      AgencyName: this.AgencyName,
      AgencyUrl: this.AgencyUrl,
      Services: this.Services,
      isDone: false
    };

    this.escortsService.addEscorts(newEscort)
      .subscribe(modelo => {
        this.modelos.push(modelo);
        console.log(this.modelos);
        this.Name = '';
      });
  }

  deleteEscorts(id) {
    const response = confirm('are you sure to delete it?');
    if (response ){
      const modelos = this.modelos;
      this.escortsService.deleteEscorts(id)
        .subscribe(data => {
          console.log(data.n);
          if(data.n == 1) {
            for(let i = 0; i < modelos.length; i++) {
              if(modelos[i]._id == id) {
                modelos.splice(i, 1);
              }
            }
          }
        })
    }
  }
/*
  updateStatus(escort: Escorts) {
    var newEscort = {
      _id: escort._id,
      Name: escort.Name,
      isDone: !escort.isDone
    };
    this.escortsService.updateEscorts(newEscort)
      .subscribe(res => {
        escort.isDone = !escort.isDone;
      })
  }


ver(modal){

}*/

}
