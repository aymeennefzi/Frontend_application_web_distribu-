import { Component } from '@angular/core';
import {Centre} from "../../Core/Models/centre";
import {CentreService} from "../../Core/Service/centre.service";
import {NgForm} from "@angular/forms";
import Swal from "sweetalert2";
import {Boutique} from "../../Core/Models/boutique";
import {BoutiqueService} from "../../Core/Service/boutique.service";

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent {
  listboutique: Boutique [] = [];
  i !: number ;

  constructor(private boutiqueS: BoutiqueService) { }

  ngOnInit(): void {
    this.refreshcentre();
  }

  refreshcentre() {
    this.boutiqueS.getAll().subscribe((data) => {
      this.listboutique = data;
    });
  }


  addboutique(formBoutique: NgForm) {
    const boutique: Boutique = {
      idCentre: formBoutique.value.idCentre,
      nom: formBoutique.value.nom,
      adresse: formBoutique.value.adresse,
    }

    this.boutiqueS.ajoutBoutique(boutique).subscribe(() => {
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


  // cancelEdit() {
  //   this.selectedOrg = new Org();
  // }


  delete(idBoutique: number , i: any) {
    console.log(idBoutique);
    if (window.confirm('Do you want to go ahead?')) {
      this.boutiqueS.deleteBoutique(idBoutique).subscribe(() => {
        this.listboutique.splice(i, 1);
      });
    }
  }

}
