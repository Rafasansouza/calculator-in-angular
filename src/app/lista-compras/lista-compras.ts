import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss'
})
export class ListaCompras {
  
  lista: ItemLista[] = [];
  item: string = '';

  placeholderText: string = 'Digite algo...';
  placeholderError: boolean = false;

  adicionarItem() {
    let itemLista = new ItemLista();
    
    // if (this.item.trim().length === 0) {
    //   return ;
    // }

    if (!this.item || this.item.trim() === '') {
      this.placeholderText = 'Digite um item!';
      this.placeholderError = true;
      this.item = ''; // limpa o campo
      return;
    }
    
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
    
    this.item = '';

    console.table(this.lista);
  }

  rsicarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
    this.placeholderText = 'Digite algo...';
    this.placeholderError = false;
  }
}