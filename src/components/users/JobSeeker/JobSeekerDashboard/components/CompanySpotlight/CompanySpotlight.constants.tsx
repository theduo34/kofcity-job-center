
export interface CompanySpotlightProps {
    id?: number,
    name?: string,
    logo?: string,
    news?: string[],
    jobs?: {title: string, location: string}[],
    values?: string[],
    offers?: string[]


}

export const getCompanies = (): CompanySpotlightProps[] => [
    {
        id: 1,
        name: 'TechCorp',
        logo: 'techcorp-logo.png',
        news: ['TechCorp launches new product', 'TechCorp partners with XYZ'],
        jobs: [
            { title: 'Software Engineer', location: 'New York' },
            { title: 'Product Manager', location: 'San Francisco' }
        ],
        values: ['Innovation', 'Integrity', 'Inclusion'],
        offers: ['Competitive Salaries', 'Health Benefits', 'Remote Work Options']
    },
    {
        id: 2,
        name: 'HealthPlus',
        logo: 'healthplus-logo.png',
        news: ['HealthPlus expands globally', 'HealthPlus wins industry award'],
        jobs: [
            { title: 'Data Scientist', location: 'Boston' },
            { title: 'UX Designer', location: 'Chicago' }
        ],
        values: ['Wellness', 'Empathy', 'Excellence'],
        offers: ['Flexible Hours', 'Gym Memberships', 'Career Development']
    },
    {
        id: 3,
        name: 'HealthPlus',
        logo: 'healthplus-logo.png',
        news: ['HealthPlus expands globally', 'HealthPlus wins industry award'],
        jobs: [
            { title: 'Data Scientist', location: 'Boston' },
            { title: 'UX Designer', location: 'Chicago' }
        ],
        values: ['Wellness', 'Empathy', 'Excellence'],
        offers: ['Flexible Hours', 'Gym Memberships', 'Career Development']
    },
    {
        id: 4,
        name: 'HealthPlus',
        logo: 'healthplus-logo.png',
        news: ['HealthPlus expands globally', 'HealthPlus wins industry award'],
        jobs: [
            { title: 'Data Scientist', location: 'Boston' },
            { title: 'UX Designer', location: 'Chicago' }
        ],
        values: ['Wellness', 'Empathy', 'Excellence'],
        offers: ['Flexible Hours', 'Gym Memberships', 'Career Development']
    },
    {
        id: 5,
        name: 'HealthPlus',
        logo: 'healthplus-logo.png',
        news: ['HealthPlus expands globally', 'HealthPlus wins industry award'],
        jobs: [
            { title: 'Data Scientist', location: 'Boston' },
            { title: 'UX Designer', location: 'Chicago' }
        ],
        values: ['Wellness', 'Empathy', 'Excellence'],
        offers: ['Flexible Hours', 'Gym Memberships', 'Career Development']
    }
];
