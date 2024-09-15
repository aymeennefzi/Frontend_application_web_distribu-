import {Component, OnInit} from '@angular/core';
import {Boutique} from "../../Core/Models/boutique";
import {BoutiqueService} from "../../Core/Service/boutique.service";
import {NgForm} from "@angular/forms";
import {Centre} from "../../Core/Models/centre";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-boutique',
  templateUrl: './list-boutique.component.html',
  styleUrls: ['./list-boutique.component.css']
})
export class ListBoutiqueComponent implements OnInit{
  listboutique : Boutique [] =[] ;
  i!:number ;

  constructor(private BoutiS : BoutiqueService) {
  }
  ngOnInit() {
    this.refreshcentre();
  }

  addBoutique(formBoutique: NgForm) {
    const boutique: Boutique = {
      nom: formBoutique.value.nom,
      adresse: formBoutique.value.adresse,
      idCentre: formBoutique.value.idCentre,
    }

    this.BoutiS.ajoutBoutique(boutique).subscribe(() => {
      // Utiliser SweetAlert2 pour afficher une alerte de succès
      console.log(this.listboutique.values())
      Swal.fire({
        icon: 'success',
        title: 'Boutique ajoutée avec succès!',
        showConfirmButton: false,
        timer: 2000
      });

      // Actualiser les universités après avoir ajouté avec succès
      this.refreshcentre();
    });
  }

  refreshcentre(){
    this.BoutiS.getAll().subscribe((data) =>this.listboutique=data);
  }

  // delete(id: number , i: any) {
  //   console.log(id);
  //   if (window.confirm('Do you want to go ahead?')) {
  //     this.centreS.deleteCentre(id).subscribe(() => {
  //       this.listcentre.splice(i, 1);
  //     });
  //   }
  // }

}
