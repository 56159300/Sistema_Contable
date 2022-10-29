import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
	name: 'formErrorHandler',
})
export class FormErrorHandlerPipe implements PipeTransform {
	// Valida el error generado y devuelve el código de traducción correspondiente
	transform(value: AbstractControl): any {
		let errorCode = '';
		if (value.hasError('required')) {
			errorCode = 'Campo requerido';
		}
		if (value.hasError('email')) {
			errorCode = '	Este no parece ser un email válido';
		}
		if (value.hasError('minlength')) {
			errorCode = '	No has alcanzado el mínimo de {{minLength}} caracteres necesarios';
		}
		if (value.hasError('maxlength')) {
			errorCode = '	Has superado el máximo de {{maxLength}} caracteres permitidos';
		}
		return errorCode;
	}
}
