export class ListData{

    page;
    results;
    total_pages;
    total_results;

    constructor(data){
        if(data) {
            this.page = data.page ;
            this.results = data.results ;
            this.total_pages = data.total_pages ;
            this.total_results = data.total_results ;
        }
    }
}