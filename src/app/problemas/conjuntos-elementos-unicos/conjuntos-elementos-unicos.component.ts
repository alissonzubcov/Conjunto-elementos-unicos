import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

/**
 * @autor Alisson Richardy Zubcov
 */
@Component({
  selector: 'app-conjuntos-elementos-unicos',
  templateUrl: './conjuntos-elementos-unicos.component.html',
  styleUrls: ['./conjuntos-elementos-unicos.component.css']
})
export class ConjuntosElementosUnicosComponent implements OnInit {
  public intervaloNumerosAceitosEmQ: number[] = []; 
  public intervaloNumerosAceitosEmK: number[] = [];
  public valoresArmazenadosK: number[] = [];
  public statusBotaoOkQuantidade: boolean = true;
  public statusBotaoOkLeituraNumero: boolean = false;
  public statusBotaoOkZerar: boolean = false;
  public quantidadeDeLeituraEmK: number = 1;
  public numerosProcessadosParaSaida: number[] = [];

  constructor() {
    this.intervaloNumerosAceitosEmQ.push(1);
    this.intervaloNumerosAceitosEmQ.push(1000);
    this.intervaloNumerosAceitosEmK.push(-1000);
    this.intervaloNumerosAceitosEmK.push(1000);

  }
  ngOnInit(): void {

  }

  /**
   * @description Metedo responsável por verificar se determinado número é decimal. Retorna true caso não for decimal
   * @param numero: number
   * @return boolean
   */
  public verificaNumeroDecimal(numero: number): boolean {
    return parseInt(numero.toString()) != parseFloat(numero.toString());

  }
/**
 * @description Responsável por iniciar as variaveis de status dos botões e indicar a quantidade de leituras que serão efetuadas
 * atraves do parametro quantidade
 * @param quantidade: number
 */
  public definirQuantidadeDeK(quantidade: number): void {
    if (!this.verificaNumeroDecimal(quantidade)) {
      if (quantidade >= this.intervaloNumerosAceitosEmQ[0] && quantidade <= this.intervaloNumerosAceitosEmQ[1]) {
        this.quantidadeDeLeituraEmK = quantidade;
        this.statusBotaoOkLeituraNumero = true;
        this.statusBotaoOkZerar = true;
        this.statusBotaoOkQuantidade = false;
      }
    } else {
      console.log("não é um decimal!")
    }
  }

  /**
   * @description Metodo responsável or incluir um novo valor para a lista de saída. Caso o numero informado ser decimal e estar
   * nos valores permitidos, o novo valor será incluido na lista e limpará o ultimo número digitado pelo usuário.
   * @param inputValor 
   */
  public incluirNovoValor(inputValor: any): void {
    let novoValor = inputValor.value;
    if (!this.verificaNumeroDecimal(novoValor)) {
      if (novoValor >= this.intervaloNumerosAceitosEmK[0] && novoValor <= this.intervaloNumerosAceitosEmK[1]) {
        this.quantidadeDeLeituraEmK -= 1;
        let resposta = this.valoresArmazenadosK.indexOf(novoValor);
       inputValor.value = '';
        if (resposta == -1) {
          this.valoresArmazenadosK.push(novoValor);
        } else {
          console.log("já existe esse numero!");
        }
      }
    }
    if (this.quantidadeDeLeituraEmK < 1) {
      this.statusBotaoOkLeituraNumero = false;
      this.exibirNumeros();
    }
  }

  /**
   * @description Atribui valores para as variáveis de controle para nova leitura de valores. Este metodo é invocado por meio do botão
   * Zerar e repetir
   */
  public zerarERecomecar(): void {
    this.statusBotaoOkQuantidade = true;
    this.statusBotaoOkLeituraNumero = false;
    this.statusBotaoOkZerar = false;
    this.quantidadeDeLeituraEmK = 0;
    this.valoresArmazenadosK = [];
    this.numerosProcessadosParaSaida = [];
  }
  /**
   * @description Exibe os números informados em orderm crescente
   */
  public exibirNumeros(): void {
    this.valoresArmazenadosK.sort((a: number, b: number) => a - b);
    this.numerosProcessadosParaSaida = this.valoresArmazenadosK;
  }



}
