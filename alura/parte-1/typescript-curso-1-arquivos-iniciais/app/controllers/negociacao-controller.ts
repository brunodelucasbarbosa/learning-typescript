import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona(): void {
    const negociacao = this.createNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.limpaFormulario();
    console.log(this.negociacoes.lista());
  }

  createNegociacao() : Negociacao {
    const regexp = /-/g;
    const date = new Date(this.inputData.value.replace(regexp, ','));
    return new Negociacao(
      date,
      parseInt(this.inputQuantidade.value),
      parseFloat(this.inputValor.value)
    )
  }

  limpaFormulario(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}