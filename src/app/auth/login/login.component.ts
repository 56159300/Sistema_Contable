import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { UtilsService } from '@services/utils/utils.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm: UntypedFormGroup;
	submitted = false;
	returnUrl: string;
	error = '';
	loading = false;

	constructor(
		private formBuilder: UntypedFormBuilder,
    private utilsService: UtilsService,
	) {
		this.buildForm();
	}

	ngOnInit() {}

	// Construye el formulario
	buildForm() {
		this.loginForm = this.formBuilder.group({
			username: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

	// Realiza el login
	onSubmit() {
		this.submitted = true;
		this.error = '';

		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
    /* BACKEND */
    this.utilsService.setLogin({
      usuarioID: 1,
      nombre: 'William',
      apellido: 'Garcia',
      userName: this.usernameField.toString(),
      email: 'wgarcia@umg.com'
    });

    window.location.reload();
	}

	get usernameField() {
		return this.loginForm.get('username');
	}

	get passwordField() {
		return this.loginForm.get('password');
	}

}
