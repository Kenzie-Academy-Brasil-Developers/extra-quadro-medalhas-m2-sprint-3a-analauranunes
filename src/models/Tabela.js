class Tabela{
    static body = document.querySelector('body');
    
    static paisesTabela(paises){
        const table = document.querySelector('table');
        const tableTittles = document.createElement('tr');
        tableTittles.id = "titulos";

        table.innerHTML = "";

        tableTittles.innerHTML = `
        <th id = "posicao">Posição</th>
        <th>País</th>
        <th id = "medalha-ouro">Ouro</th>
        <th id = "medalha-prata">Prata</th>
        <th id = "medalha-bronze">Bronze</th>
        <th>Total</th>
        `
        table.appendChild(tableTittles);

        for(let i = 0; i < paises.length; i++){
            const {country, flag_url, medal_bronze, medal_gold, medal_silver} = paises[i]; 
            const totalMedals = medal_bronze + medal_gold + medal_silver;
            const infoPaises = document.createElement('tr');
            infoPaises.id = "colocacoes-info";

            infoPaises.innerHTML = `
            <td>${i + 1}º</td>
            <td>
                <div class="bandeiras">
                    <img src = "${flag_url}">
                    ${country}
                </div>
            </td>
            <td>${medal_gold}</td>
            <td>${medal_silver}</td>
            <td>${medal_bronze}</td>
            <td>${totalMedals}</td>
            `
            table.appendChild(infoPaises);
        }
    }
}

export { Tabela };