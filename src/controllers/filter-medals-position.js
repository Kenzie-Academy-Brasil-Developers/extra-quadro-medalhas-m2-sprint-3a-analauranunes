import { Tabela } from "../models/Tabela.js"

class Filtros {

    static async posicao(data){
        data.map(el => el.medalhasTotal = el.medal_bronze + el.medal_gold + el.medal_silver);
        data.sort((a, b) => b.medalhasTotal - a.medalhasTotal);

        data.sort((a, b) => {
            if(a.medalhasTotal === b.medalhasTotal){
                return b.medal_gold - a.medal_gold;
            }
        })  

        Tabela.paisesTabela(data);
    }

    static async ouro(data){
        data.sort((a, b) => b.medal_gold - a.medal_gold);

        Tabela.paisesTabela(data);
    }

    static async prata(data){
        data.sort((a, b) => b.medal_silver - a.medal_silver);

        Tabela.paisesTabela(data);
    }

    static async bronze(data){
        data.sort((a, b) => b.medal_bronze - a.medal_bronze);

        Tabela.paisesTabela(data);
    }
}

export { Filtros }