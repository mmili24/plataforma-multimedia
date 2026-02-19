export class StreamService {
  constructor() {
    this.KEY = 'streamflix_db_v1';
  }

  guardarCataleg(llistaMultimedia) {
    const pelisSeries = JSON.stringify(llistaMultimedia);
    localStorage.setItem(this.KEY, pelisSeries);
    }

  carregarCataleg() {
    const pelisSeries = localStorage.getItem(this.KEY);
    if (pelisSeries === null) {
      return [];
    }
    return JSON.parse(pelisSeries);
  }

  esborrarTot() {
    localStorage.removeItem(this.KEY);
  }
}  