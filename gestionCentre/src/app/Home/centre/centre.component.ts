import { Component } from '@angular/core';
import {CentreService} from "../../Core/Service/centre.service";
import {Centre} from "../../Core/Models/centre";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.css']
})
export class CentreComponent {
  listcentre: Centre [] = [];
  i !: number ;

  constructor(private centreS: CentreService) { }

  ngOnInit(): void {
    this.refreshcentre();
  }



  addcentre(formCentre: NgForm) {
    const centre: Centre = {
      idCentre: formCentre.value.idCentre,
      nom: formCentre.value.nom,
      adresse: formCentre.value.adresse,
    }

    this.centreS.ajouterCentre(centre).subscribe(() => {
      // Utiliser SweetAlert2 pour afficher une alerte de succès
      console.log(this.listcentre.values())
      Swal.fire({
        icon: 'success',
        title: 'Centre ajoutée avec succès!',
        showConfirmButton: false,
        timer: 2000
      });

      // Actualiser les universités après avoir ajouté avec succès
      this.refreshcentre();
    });
  }

  refreshcentre(){
    this.centreS.getallCentre().subscribe((data)=>this.listcentre=data)
  }



  delete(id: number , i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.centreS.deleteCentre(id).subscribe(() => {
        this.listcentre.splice(i, 1);
      });
    }
  }
}
