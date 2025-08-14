export type FungiCategory =
  | 'edible mushroom'
  | 'medicinal fungi'
  | 'mold'
  | 'yeast'
  | 'pathogenic fungi'
  | 'mycorrhizal fungi'
  | 'lichen';

export type FungiPhylum =
  | 'chytridiomycota'
  | 'zygomycota'
  | 'glomeromycota'
  | 'ascomycota'
  | 'basidiomycota';

export type Fungi = {
  name: string;
  scientificName: string;
  phylum: FungiPhylum;
  category: FungiCategory;
  habitat: string;
  photoId: string;
  benefits?: string[];
  uses?: string[];
  effects?: string[];
};

export const fungiList: Fungi[] = [
  {
    name: 'shiitake',
    scientificName: 'lentinula edodes',
    phylum: 'basidiomycota',
    category: 'edible mushroom',
    habitat: 'decaying hardwood trees',
    photoId: '1629665001701-a232a0ba4eec',
    benefits: ['supports heart health', 'boosts immunity'],
  },
  {
    name: "baker's yeast",
    scientificName: 'saccharomyces cerevisiae',
    phylum: 'ascomycota',
    category: 'yeast',
    habitat: 'sugary environments like fruits and grains',
    photoId: '1642497393543-0e552dfb5c31',
    uses: ['baking', 'brewing beer', 'winemaking'],
  },
  {
    name: 'bread mold',
    scientificName: 'rhizopus stolonifer',
    phylum: 'zygomycota',
    category: 'mold',
    habitat: 'decaying organic matter',
    photoId: '1694022887658-3f71dcedfe41',
    effects: ['spoils bread', 'food contamination'],
  },
  {
    name: 'reishi',
    scientificName: 'ganoderma lucidum',
    phylum: 'basidiomycota',
    category: 'medicinal fungi',
    habitat: 'decaying hardwood logs',
    photoId: '/images/reishi.jpg',
    benefits: ['supports immune system', 'may reduce stress'],
  },
  {
    name: 'morel',
    scientificName: 'morchella esculenta',
    phylum: 'ascomycota',
    category: 'edible mushroom',
    habitat: 'forests, especially after wildfires',
    photoId: '/images/morel.jpg',
    benefits: ['rich in antioxidants', 'delicacy in cooking'],
  },
  {
    name: 'cordyceps',
    scientificName: 'ophiocordyceps sinensis',
    phylum: 'ascomycota',
    category: 'medicinal fungi',
    habitat: 'high-altitude grasslands, parasitic on insects',
    photoId: '/images/cordyceps.jpg',
    benefits: ['may improve energy', 'supports respiratory health'],
  },
  {
    name: 'button mushroom',
    scientificName: 'agaricus bisporus',
    phylum: 'basidiomycota',
    category: 'edible mushroom',
    habitat: 'fields and meadows rich in organic matter',
    photoId: '/images/button-mushroom.jpg',
    benefits: ['low calorie', 'rich in b vitamins'],
  },
  {
    name: "athlete's foot fungus",
    scientificName: 'trichophyton rubrum',
    phylum: 'ascomycota',
    category: 'pathogenic fungi',
    habitat: 'human skin (warm, moist areas)',
    photoId: '/images/athletes-foot.jpg',
    effects: ["causes athlete's foot", 'skin irritation'],
  },
  {
    name: 'death cap',
    scientificName: 'amanita phalloides',
    phylum: 'basidiomycota',
    category: 'pathogenic fungi',
    habitat: 'woodlands with oak, chestnut, pine',
    photoId: '/images/death-cap.jpg',
    effects: ['highly poisonous', 'causes liver failure'],
  },
  {
    name: 'mycorrhizal amanita',
    scientificName: 'amanita muscaria',
    phylum: 'basidiomycota',
    category: 'mycorrhizal fungi',
    habitat: 'conifer and deciduous forests',
    photoId: '/images/amanita-muscaria.jpg',
    effects: ['psychoactive', 'toxic in large amounts'],
  },
  {
    name: 'lichen (reindeer moss)',
    scientificName: 'cladonia rangiferina',
    phylum: 'ascomycota',
    category: 'lichen',
    habitat: 'arctic tundra and boreal forests',
    photoId: '/images/reindeer-moss.jpg',
    uses: ['reindeer food', 'traditional medicine'],
  },
  {
    name: 'arbuscular mycorrhiza',
    scientificName: 'glomus intraradices',
    phylum: 'glomeromycota',
    category: 'mycorrhizal fungi',
    habitat: 'plant roots in soil',
    photoId: '/images/glomus.jpg',
    benefits: ['helps plants absorb nutrients', 'improves soil health'],
  },
  {
    name: 'chytrid fungus',
    scientificName: 'batrachochytrium dendrobatidis',
    phylum: 'chytridiomycota',
    category: 'pathogenic fungi',
    habitat: 'freshwater environments',
    photoId: '/images/chytrid.jpg',
    effects: [
      'causes chytridiomycosis in amphibians',
      'threatens biodiversity',
    ],
  },
];

export default fungiList;
