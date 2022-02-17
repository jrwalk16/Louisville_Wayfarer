import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'

@Injectable()
export class SearchService {
    constructor(private http: HttpClient){ }
    findPost(post: string){
        return this.http
        .get(post);
    }
}