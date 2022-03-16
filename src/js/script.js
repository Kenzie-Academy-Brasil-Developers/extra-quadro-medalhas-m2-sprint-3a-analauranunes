import { Api } from "../controllers/API.js";
import { Busca } from "../controllers/button-search.js";
import { Filtros } from "../controllers/filter-medals-position.js";

const data = await Api.dadosPaises();
const dataArr = [...data];

Filtros.posicao(dataArr);

const buscarForm = document.querySelector('form');
const tabela = document.querySelector('#tabela-filtro')

buscarForm.addEventListener('submit', Busca.botaoBusca);

tabela.addEventListener('click', (event) => {
    const idFiltro = event.target.id;
    
    if(idFiltro === 'posicao'){
        Filtros.posicao(dataArr);
    }
    else if(idFiltro === 'medalha-ouro'){
        Filtros.ouro(dataArr);
    }
    else if(idFiltro === 'medalha-prata'){
        Filtros.prata(dataArr);
    }
    else if(idFiltro === 'medalha-bronze'){
        Filtros.bronze(dataArr);
    }
})