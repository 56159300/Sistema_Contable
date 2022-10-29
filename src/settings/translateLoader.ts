import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomTranslateLoader implements TranslateLoader {
	constructor(private http: HttpClient) {}

	getTranslation(lang: string): Observable<any> {
		const translationsVersion = 'tsv';
		const translations = 'tls';
		let change = false;
		const obs = new Observable((observer) => {
			this.http
				.post<any>(environment.api.url + '/app-settings/one', { filters: {} })
				.subscribe(async (settings: any) => {
					const translationsLocalStorage: string = localStorage.getItem(translationsVersion) || '0';
					if (Number(settings.translationsVersion) > Number(translationsLocalStorage)) {
						localStorage.setItem(translationsVersion, String(settings.translationsVersion));
						change = true;
					}
					if (change) {
						const res = await this.http
							.post(environment.api.url + '/translations/order', {
								code: lang,
							})
							.toPromise();
						localStorage.setItem(translations, JSON.stringify(res));
						observer.next(res);
						observer.complete();
					} else {
						observer.next(JSON.parse(localStorage.getItem(translations)));
						observer.complete();
					}
				});
		});

		return obs;
	}
}
