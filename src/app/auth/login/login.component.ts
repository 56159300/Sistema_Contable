import { AccountService } from '@services/utils/account.service';
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
    private accountService: AccountService
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

    this.accountService.login(this.usernameField.value, this.passwordField.value).then((result) => {
      if (result){
        this.utilsService.setLogin({
          usuarioID: result.usuarioID,
          nombre: result.nombre,
          apellido: result.apellido,
          userName: this.usernameField.toString(),
          email: result.email
        });
        window.location.reload();
      }
    });
		this.loading = false;

	}

	get usernameField() {
		return this.loginForm.get('username');
	}

	get passwordField() {
		return this.loginForm.get('password');
	}

}
