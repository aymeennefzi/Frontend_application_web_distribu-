import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Employe} from "../../Core/Models/employe";
import {AuthentificationService} from "../../Core/Service/authentification.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  formSignUp! : FormGroup;
  id!:number;
  listempl: Employe [] =[] ;
  constructor(private authentication : AuthentificationService , private route : Router , private fb : FormBuilder) {}
  ngOnInit() {
    this.formSignUp=this.fb.group({
      nom : this.fb.control("", Validators.required),
      prenom :this.fb.control("", Validators.required),
      cin :this.fb.control("", Validators.required),
      // dateNaissance :this.fb.control("", Validators.required),
      email :this.fb.control("",Validators.required),
      password :this.fb.control("",Validators.required)
    })
  }
  SignUp() {
    if (this.formSignUp.valid) {


      // L'e-mail n'existe pas, ajoutez l'étudiant
      this.authentication.ajouterEmploye(this.formSignUp.value).subscribe(response => {
        console.log('saved');
        const employeeName = response.nom;
        // Utilisez SweetAlert pour afficher une alerte
        Swal.fire({
          icon: 'success',
          title: `Bienvenue, ${employeeName}!`,
          text: 'Connecter à votre compte.',
          showConfirmButton: false,
          timer: 2000
        });
        this.route.navigate(['/signIn']);
      });
    } else {
      // Utilisez SweetAlert pour afficher une alerte en cas de formulaire invalide
      Swal.fire({
        icon: 'error',
        title: 'Veuillez remplir tous les champs correctement!',
      });
    }
  }

}
