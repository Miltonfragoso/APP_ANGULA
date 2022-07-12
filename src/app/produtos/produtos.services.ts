import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduto } from "./IProduto";


@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "http://localhost:3000/";

    obterProdutos() : Observable<IProduto[]>{
        return this.http
        .get<IProduto[]>(this.UrlServiceV1 + "produtos");
    }
}