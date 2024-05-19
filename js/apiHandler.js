export class API{
    url = ""
    constructor(url){
        this.url = url
    }

    async getHandler(endpoint){
        var response = await fetch(`${this.url}/${endpoint}`);
        return await response.json();
    }

}