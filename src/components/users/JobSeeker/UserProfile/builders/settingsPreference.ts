interface JobTitleProps {
    key?: string,
    title?: string,
}

interface RegionProps {
    key?: string;
    region?: string;
    cities?: string[];
}

// job titles
export const jobTitles: JobTitleProps[]  = [
    {
        key: "softwareEngineer",
        title: "Software Engineer",
    },
    {
        key: "productManager",
        title: "Product Manager",
    },
    {
        key: "dataAnalyst",
        title: "Data Analyst",
    },
    {
        key: "uxDesigner",
        title: "UX Designer",
    },
    {
        key: "devOpsEngineer",
        title: "DevOps Engineer",
    },
    {
        key: "qualityAssurance",
        title: "Quality Assurance",
    },
    {
        key: "projectManager",
        title: "Project Manager",
    },
    {
        key: "businessAnalyst",
        title: "Business Analyst",
    },
    {
        key: "marketingManager",
        title: "Marketing Manager",
    },
    {
        key: "frontendDeveloper",
        title: "Frontend Developer",
    },
];

// regions
export const regions: RegionProps[] = [
    {
        key: "greaterAccraRegion",
        region: "Greater Accra",
        cities: ["Accra", "Tema", "Madina", "Nungua", "Teshie", "Ashaiman", "Kasoa", "Adenta", "Dome", "Amasaman"]
    },
    {
        key: "ashantiRegion",
        region: "Ashanti",
        cities: ["Kumasi", "Obuasi", "Ejisu", "Mampong", "Konongo", "Bekwai", "Asante Bekwai", "Agogo", "Offinso", "Nkawie"]
    },
    {
        key: "westernRegion",
        region: "Western",
        cities: ["Takoradi", "Sekondi", "Tarkwa", "Axim", "Bibiani", "Daboase", "Shama", "Prestea", "Elubo", "Nkroful"]
    },
    {
        key: "centralRegion",
        region: "Central",
        cities: ["Cape Coast", "Elmina", "Winneba", "Mankessim", "Swedru", "Apam", "Saltpond", "Anomabo", "Assin Fosu", "Twifo Praso"]
    },
    {
        key: "easternRegion",
        region: "Eastern",
        cities: ["Koforidua", "Nsawam", "Akim Oda", "Nkawkaw", "Somanya", "Begoro", "Kyebi", "Asamankese", "Suhum", "Kwahu Tafo"]
    },
    {
        key: "northernRegion",
        region: "Northern",
        cities: ["Tamale", "Yendi", "Savelugu", "Walewale", "Bimbilla", "Gambaga", "Nalerigu", "Tolon", "Karaga", "Saboba"]
    },
    {
        key: "upperEastRegion",
        region: "Upper East",
        cities: ["Bolgatanga", "Navrongo", "Bawku", "Zebilla", "Sandema", "Paga", "Chiana", "Tongo", "Garu", "Fumbisi"]
    },
    {
        key: "upperWestRegion",
        region: "Upper West",
        cities: ["Wa", "Nandom", "Lawra", "Tumu", "Wechiau", "Jirapa", "Nadowli", "Gwollu", "Funsi", "Lambussie"]
    },
    {
        key: "voltaRegion",
        region: "Volta",
        cities: ["Ho", "Keta", "Hohoe", "Anloga", "Sogakope", "Denu", "Aflao", "Kpando", "Peki", "Dzodze"]
    },
    {
        key: "westernNorthRegion",
        region: "Western North",
        cities: ["Sefwi Wiawso", "Juaboso", "Enchi", "Dadieso", "Bibiani", "Bodi", "Akontombra", "Sefwi Bekwai", "Essam", "Debiso"]
    },
    {
        key: "bonoRegion",
        region: "Bono",
        cities: ["Sunyani", "Berekum", "Dormaa Ahenkro", "Wenchi", "Techiman", "Nsawkaw", "Tepa", "Sampa", "Drobo", "Seikwa"]
    },
    {
        key: "bonoEastRegion",
        region: "Bono East",
        cities: ["Techiman", "Kintampo", "Atebubu", "Nkoranza", "Yeji", "Prang", "Kwame Danso", "New Longoro", "Amantin", "Ejura"]
    },
    {
        key: "ahafoRegion",
        region: "Ahafo",
        cities: ["Goaso", "Bechem", "Duayaw Nkwanta", "Kenyaase", "Mim", "Kukuom", "Hwidiem", "Acherensua", "Ahafo Ano", "Dadiesoaba"]
    },
    {
        key: "savannahRegion",
        region: "Savannah",
        cities: ["Damongo", "Bole", "Salaga", "Sawla", "Buipe", "Tolon", "Daboya", "Makango", "Kpalbe", "Yapei"]
    },
    {
        key: "otiRegion",
        region: "Oti",
        cities: ["Dambai", "Jasikan", "Kadjebi", "Nkwanta", "Kete Krachi", "Kpassa", "Brewaniase", "Ahamansu", "Tapa Abotoase", "Baglo"]
    },
];
