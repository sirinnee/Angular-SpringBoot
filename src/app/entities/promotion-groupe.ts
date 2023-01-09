import { Affectation } from './affectation';

export class PromotionGroupe {
  codeGroupe!: number;
  nomGroupe!: String;
  niveau!: number;
  nbrEtudiants!: number;
  dateDemarrage!: Date;
  dateCloture!: Date;
  nomDiplome!: String;

  affectations!: Affectation[];
  constructor() {
    this.dateCloture = new Date();
    this.dateDemarrage = new Date();
  }
}
