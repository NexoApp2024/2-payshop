import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  /**
   * Variables de logos para el front
   */
  logoPrincipal = './assets/img/logo.png'

  /**
   * Formularios de login
   */
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder, 
    private route: Router) { 

    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login() {
    // Swal.showLoading(Swal.getDenyButton())
    console.log(this.loginForm)
    if (this.loginForm.value.email === 'admin2pay@2payshop.com' && this.loginForm.value.password === 'abc1234') {
      // Swal.hideLoading()
      this.route.navigateByUrl('/administrador/home')
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Credenciales invalidas',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

}
