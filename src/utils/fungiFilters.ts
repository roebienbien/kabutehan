import type { Fungi, FungiCategory, FungiPhylum } from '../data/fungi';
import fungiList from '../data/fungi';

export function getFungiByCategory(category: FungiCategory): Fungi[] {
  return fungiList.filter((fungus) => fungus.category === category);
}

export function getFungiByPhylum(phylum: FungiPhylum): Fungi[] {
  return fungiList.filter((fungus) => fungus.phylum == phylum);
}
