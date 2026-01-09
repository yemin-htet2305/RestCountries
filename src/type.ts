export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  capital: string[];
  region: string;
  subregion: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}