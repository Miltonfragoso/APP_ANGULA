import { Component, OnInit } from '@angular/core';
import { IProduto } from '../IProduto';
import { ProdutoService } from '../produtos.services';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  constructor(private _produtoService: ProdutoService) { }

  public produtos: IProduto[] = [];

  ngOnInit(){
    this._produtoService.obterProdutos()
            .subscribe( produtos => {this.produtos = produtos; console.log(produtos)});
  }
}
