export class Constants{
    static HttpEndpoints = class {
        static IP : string = 'http://localhost:3000';
        static ALL_HEROES: string = this.IP + '/heroes/all-heroes';
        static HERO_DETAIL: string = this.IP + '/heroes/hero-detail';
        static ADD_HERO: string = this.IP + '/heroes/insert-hero';
        static DELETE_HERO: string = this.IP + '/heroes/delete-hero';
        static UPDATE_HERO: string = this.IP + '/heroes/update-hero';


        static ALL_COMPANIES = this.IP + '/companies/all-companies';
        static COMPANY_DETAIL = this.IP + '/companies/company-detail';
        static ADD_COMPANY = this.IP + '/companies/add-company';
        static UPDATE_COMPANY = this.IP + '/companies/update-company';
        static DELETE_COMPANY = this.IP + '/companies/delete-company';

    }

    static Keys = class {
        static HERO = "HERO";
        static COMPANY = "COMPANY";
    }
}