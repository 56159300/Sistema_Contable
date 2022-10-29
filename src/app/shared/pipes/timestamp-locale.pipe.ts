import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import { UtilsService } from '@services/utils/utils.service';

@Pipe({
	name: 'timestampLocale',
})
export class TimestampLocalePipe implements PipeTransform {
	constructor(private utilsService: UtilsService) {}

	// Convierta la fecha de acuerdo con los parámetros y traducciones disponibles.
	transform(date: Date | Date, type = 'short'): string {
		if (date) {
			const format = this.utilsService.getDateFormat('short');
			let timeZone = '600';
			if (timeZone !== undefined && Number(timeZone) >= 0) {
				timeZone = '+' + timeZone;
			}

			return formatDate(date, format, 'en-US');
		} else {
			return '';
		}
	}
}
