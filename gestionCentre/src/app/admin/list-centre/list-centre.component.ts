import {Component, OnInit} from '@angular/core';
import {Centre} from "../../Core/Models/centre";
import {CentreService} from "../../Core/Service/centre.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";


@Component({
  selector: 'app-list-centre',
  templateUrl: './list-centre.component.html',
  styleUrls: ['./list-centre.component.css']
})
export class ListCentreComponent implements OnInit {
  listcentre: Centre [] = [];
  i!: any;
  constructor(private centreS: CentreService) {
  }

  ngOnInit() {
    this.refreshcentre()  }

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
        title: 'Université ajoutée avec succès!',
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
