export type Page = 'home' | 'mission' | 'remise-materiel-hopital' | 'mobilisation-madoua' | 'covid19' | 'prix-excellence-5eme' | 'fete-jeunesse-2017' | 'rencontre-roi-paris' | 'prix-excellence-4eme' | 'refection-peintures' | 'prix-excellence-3eme' | 'don-medicaments' | 'prix-excellence-2013' | 'prix-excellence-2012' | 'groupe-electrogene' | 'agriculture-bangoulap' | 'about' | 'values' | 'vision';

export interface NavState {
  currentPage: Page;
}
