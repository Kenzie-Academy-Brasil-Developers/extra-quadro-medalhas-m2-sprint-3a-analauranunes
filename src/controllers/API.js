class Api{
    static urlApi = "https://kenzie-olympics.herokuapp.com/paises";

    static async dadosPaises(){
        const response = await fetch(this.urlApi);
        const data = await response.json();
        return data;
    }

}

export { Api };