import { Api } from "./API.js";
import { Tabela } from "../models/Tabela.js"
import { Filtros } from "./filter-medals-position.js"

class Busca{
    
    static async botaoBusca(event){
        event.preventDefault();
        const dados = await Api.dadosPaises();
        const valorInput = event.target[0].value;
        const novoValor = valorInput.toLocaleLowerCase();
        
        if(novoValor !== ""){
            const filter = dados.filter(el => el.country.toLocaleLowerCase() === novoValor);
            if(filter.length > 0){
                Tabela.paisesTabela(filter);
            }
            else{
                Filtros.posicao(dados);
            }
        }
        else{
            Filtros.posicao(dados);
        }
    }

}

export { Busca };