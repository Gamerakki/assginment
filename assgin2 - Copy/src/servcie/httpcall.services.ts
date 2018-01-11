import { environment } from './../environment/environment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomHttpService {
    constructor(private http: Http) { }

    // To extract data from response
    private extractData(res: Response): void {
        const body = res.json();
        return body || {};
        // return body.data || {};
    }
    // To handle error from response
    private handleError(error: Response | any): any {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public callServerApi(apiName: any, data: any, options: any ): any {
        if (options !== '') {
            return this.http.post(`${environment.origin}/` + apiName, data, options)
                .map(this.extractData)
                .catch(this.handleError);
        } else {
            return this.http.post(`${environment.origin}/` + apiName, data)
                .map(this.extractData)
                .catch(this.handleError);
        }

    }
}
