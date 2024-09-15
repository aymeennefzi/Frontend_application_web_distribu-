import { Component } from '@angular/core';
import Swal from "sweetalert2";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthentificationService} from "../../Core/Service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  formSignIn!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService, private route: Router) {
  }


  ngOnInit() {
    this.formSignIn = this.fb.group({
      email: this.fb.control(""),
      password: this.fb.control("")
    });
  }
  login() {
    const { email, password } = this.formSignIn.value;

    // Connexion directe sans vérifier l'existence de l'email
    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Réponse du backend :', response);

        if (response?.token && response?.user) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));

          const role = response.user.role;

          if (role) {
            console.log('Rôle de l\'utilisateur :', role);

            if (role === 'ADMIN') {
              // Rediriger l'administrateur vers le tableau de bord
              this.route.navigate(['/dashboard']);
            } else if (role === 'ETUDIANT') {
              // Rediriger l'étudiant vers la page étudiant
              this.route.navigate(['/admin']);
            } else {
              console.error('Rôle non pris en charge :', role);
            }
          } else {
            console.error('Rôle de l\'utilisateur non défini.');
          }
        } else {
          console.error('Réponse invalide du backend.');
        }
      },
      (error) => {
        console.error('Erreur lors de la connexion :', error);
        // Afficher un message d'erreur en cas d'échec de la connexion
        Swal.fire('Erreur', 'Vérifiez votre email ou mot de passe.', 'error');
      }
    );
  }

}
