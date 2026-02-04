export class StreamService {
  constructor() {
    this.KEY = 'streamflix_db_v1';
  }

  guardarCataleg(llistaMultimedia) {
    const dades = JSON.stringify(llistaMultimedia);
    localStorage.setItem(this.KEY, dades);
    }

  carregarCataleg() {
    const dades = localStorage.getItem(this.KEY);
    //????????
  }

  esborrarTot() {
    localStorage.removeItem(this.KEY);
  }
}  