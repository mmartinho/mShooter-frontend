import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Language } from './language.interface';

@Injectable({
    providedIn: 'root'
})
export class LanguagePt {

    constructor(private http: HttpClient) {
    }

    public translation() : Observable<Language> {
        return this.http.get<Language>('assets/js/pt.json');
    }
}

