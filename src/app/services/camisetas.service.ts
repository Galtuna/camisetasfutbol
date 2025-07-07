import { Injectable } from '@angular/core';
import { Camiseta } from '../models/camiseta';

@Injectable({
  providedIn: 'root'
})
export class CamisetasService {

  private camisetas: Camiseta[] = [
    { id: 1, equipo: 'España', anho: 'Mundial 1994', tipo: 'seleccion', zona: 'eur', pais: 'esp', clave: 'esp', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: 'Gonzalo A.L.', numero: '10', imagen1: 'esp1-1.jpg', imagen2: 'esp1-2.jpg'},
    { id: 2, equipo: 'España', anho: 'Mundial 1998', tipo: 'seleccion', zona: 'eur', pais: 'esp', clave: 'esp', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: 'Raúl', numero: '10', imagen1: 'esp2-1.jpg', imagen2: 'esp2-2.jpg'},
    { id: 3, equipo: 'España', anho: 'Mundial 2010', tipo: 'seleccion', zona: 'eur', pais: 'esp', clave: 'esp', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'esp3-1.jpg', imagen2: 'esp3-2.jpg'},
    { id: 4, equipo: 'España', anho: 'Mundial 2014', tipo: 'seleccion', zona: 'eur', pais: 'esp', clave: 'esp', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'esp4-1.jpg', imagen2: 'esp4-2.jpg'},
    { id: 5, equipo: 'España', anho: 'Mundial 2018', tipo: 'seleccion', zona: 'eur', pais: 'esp', clave: 'esp', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'esp5-1.jpg', imagen2: 'esp5-2.jpg'},
    { id: 6, equipo: 'Marruecos', anho: '?', tipo: 'seleccion', zona: 'afr', pais: 'mar', clave: 'mar', equipacion: '1ª', marca: 'puma.png', talla: 'L', nombre: 'Morocco', numero: '9', imagen1: 'mar1-1.jpg', imagen2: 'mar1-2.jpg'},
    { id: 7, equipo: 'Camerún', anho: '?', tipo: 'seleccion', zona: 'afr', pais: 'cam', clave: 'cam', equipacion: '2ª', marca: 'puma.png', talla: 'L', nombre: '', numero: '', imagen1: 'cam1-1.jpg', imagen2: 'cam1-2.jpg'},
    { id: 8, equipo: 'Islas Malvinas', anho: '?', tipo: 'seleccion', zona: 'ame', pais: 'ima', clave: 'ima', equipacion: '1ª', marca: 'hopeglory.jpg', talla: 'L', nombre: '', numero: '', imagen1: 'ima1-1.jpg', imagen2: 'ima1-2.jpg'},
    { id: 9, equipo: 'Real Madrid C.F.', anho: '1996/97', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rma', equipacion: '2ª', marca: 'kelme.png', talla: 'L', nombre: '', numero: '', imagen1: 'rma1-1.jpg', imagen2: 'rma1-2.jpg'},
    { id: 10, equipo: 'Real Madrid C.F.', anho: '2006/07', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rma', equipacion: '2ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'rma2-1.jpg', imagen2: 'rma2-2.jpg'},
    { id: 11, equipo: 'Real Madrid C.F.', anho: '2010/11', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rma', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'rma3-1.jpg', imagen2: 'rma3-2.jpg'},
    { id: 12, equipo: 'Real Madrid C.F.', anho: '2015/16', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rma', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: 'Modrić', numero: '10', imagen1: 'rma4-1.jpg', imagen2: 'rma4-2.jpg'},
    { id: 13, equipo: 'Real Madrid C.F.', anho: '2016/17', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rma', equipacion: '2ª', marca: 'adidas.png', talla: 'L', nombre: 'Marcelo', numero: '12', imagen1: 'rma5-1.jpg', imagen2: 'rma5-2.jpg'},
    { id: 14, equipo: 'Real Jaén C.F.', anho: '2001/02', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rja', equipacion: '2ª', marca: 'cejudo.png', talla: 'L', nombre: '', numero: '', imagen1: 'rja1-1.jpg', imagen2: 'rja1-2.jpg'},
    { id: 15, equipo: 'Real Jaén C.F.', anho: '2010/11', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rja', equipacion: '1ª', marca: 'joma.jpg', talla: 'L', nombre: '', numero: '', imagen1: 'rja2-1.jpg', imagen2: 'rja2-2.jpg'},
    { id: 16, equipo: 'Real Jaén C.F.', anho: '2019/20', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rja', equipacion: '2ª', marca: 'mercury.png', talla: 'L', nombre: '', numero: '', imagen1: 'rja3-1.jpg', imagen2: 'rja3-2.jpg'},
    { id: 17, equipo: 'Real Jaén C.F.', anho: '2022/23', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rja', equipacion: '1ª', marca: 'mercury.png', talla: 'L', nombre: '', numero: '', imagen1: 'rja4-1.jpg', imagen2: 'rja4-2.jpg'},
    { id: 18, equipo: 'Jaén Paraíso Interior F.S.', anho: '2016/17', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'jfs', equipacion: '1ª', marca: 'luanvi.jpg', talla: 'L', nombre: '', numero: '', imagen1: 'jfs1-1.jpg', imagen2: 'jfs1-2.jpg'},
    { id: 19, equipo: 'Xerez C.D.', anho: '2024/25', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'xer', equipacion: '2ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'xer1-1.jpg', imagen2: 'xer1-2.jpg'},
    { id: 20, equipo: 'Cádiz C.F.', anho: '2024/25', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'cad', equipacion: 'portero', marca: 'macron.png', talla: 'L', nombre: '', numero: '', imagen1: 'cad1-1.jpg', imagen2: 'cad1-2.jpg'},
    { id: 21, equipo: 'Real Betis Balompié', anho: '2023/24', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'bet', equipacion: 'especial', marca: 'hummel.png', talla: 'XL', nombre: '', numero: '', imagen1: 'bet1-1.jpg', imagen2: 'bet1-2.jpg'},
    { id: 22, equipo: 'Granada C.F.', anho: '2021/22', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'gra', equipacion: '1ª', marca: 'nike.png', talla: 'L', nombre: '', numero: '', imagen1: 'gra1-1.jpg', imagen2: 'gra1-2.jpg'},
    { id: 23, equipo: 'R.C.D. Espanyol', anho: '2015/16', tipo: 'club', zona: 'eur', pais: 'esp', clave: 'rcd', equipacion: '1ª', marca: 'joma.jpg', talla: 'L', nombre: '', numero: '', imagen1: 'rcd1-1.jpg', imagen2: 'rcd1-2.jpg'},
    { id: 24, equipo: 'Everton F.C.', anho: '1996/98', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'eve', equipacion: '2ª', marca: 'umbro.png', talla: 'XL', nombre: '', numero: '', imagen1: 'eve1-1.jpg', imagen2: 'eve1-2.jpg'},
    { id: 25, equipo: 'Queens Park Rangers F.C.', anho: '2008/09', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'qpr', equipacion: '1ª', marca: 'lotto.png', talla: 'XL', nombre: '', numero: '', imagen1: 'qpr1-1.jpg', imagen2: 'qpr1-2.jpg'},
    { id: 26, equipo: 'Chelsea F.C.', anho: '2011/12', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'che', equipacion: '1ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'che1-1.jpg', imagen2: 'che1-2.jpg'},
    { id: 27, equipo: 'Tottenham Hotspur F.C.', anho: '2016/17', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'tot', equipacion: '1ª', marca: 'underarmour.png', talla: 'XL', nombre: '', numero: '', imagen1: 'tot1-1.jpg', imagen2: 'tot1-2.jpg'},
    { id: 28, equipo: 'Manchester United F.C.', anho: '2022/23', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'man', equipacion: '1ª', marca: 'adidas.png', talla: 'XL', nombre: '', numero: '', imagen1: 'man1-1.jpg', imagen2: 'man1-2.jpg'},
    { id: 29, equipo: 'Sheffield F.C.', anho: '2017/18', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'she', equipacion: '1ª', marca: 'joma.jpg', talla: 'L', nombre: '', numero: '', imagen1: 'she1-1.jpg', imagen2: 'she1-2.jpg'},
    { id: 30, equipo: 'Charlton Athletic F.C.', anho: '2023/24', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'cha', equipacion: '2ª', marca: 'castore.jpg', talla: 'XL', nombre: '', numero: '', imagen1: 'cha1-1.jpg', imagen2: 'cha1-2.jpg'},
    { id: 31, equipo: 'Wycombe Wanderes F.C.', anho: '2021/22', tipo: 'club', zona: 'eur', pais: 'ing', clave: 'wyc', equipacion: 'especial', marca: 'gambea.png', talla: 'L', nombre: '', numero: '10', imagen1: 'wyc1-1.jpg', imagen2: 'wyc1-2.jpg'},
    { id: 32, equipo: 'Sporting C. Portugal', anho: '2010/11', tipo: 'club', zona: 'eur', pais: 'por', clave: 'spp', equipacion: '2ª', marca: 'puma.png', talla: 'L', nombre: '', numero: '', imagen1: 'spp1-1.jpg', imagen2: 'spp1-2.jpg'},
    { id: 33, equipo: 'F.C. Vale Formoso', anho: '2017', tipo: 'club', zona: 'eur', pais: 'por', clave: 'vfo', equipacion: '1ª', marca: '', talla: 'L', nombre: '', numero: '', imagen1: 'vfo1-1.jpg', imagen2: 'vfo1-2.jpg'},
    { id: 34, equipo: 'A.C. Fiorentina', anho: '2008/09', tipo: 'club', zona: 'eur', pais: 'ita', clave: 'fio', equipacion: '1ª', marca: 'lotto.png', talla: 'XXL', nombre: '', numero: '', imagen1: 'fio1-1.jpg', imagen2: 'fio1-2.jpg'},
    { id: 35, equipo: 'Grenoble Foot 38', anho: '2009/10', tipo: 'club', zona: 'eur', pais: 'fra', clave: 'gre', equipacion: '2ª', marca: 'nike.png', talla: 'L', nombre: '', numero: '', imagen1: 'gre1-1.jpg', imagen2: 'gre1-2.jpg'},
    { id: 36, equipo: 'Hertha Berliner S.C.', anho: '2006/07', tipo: 'club', zona: 'eur', pais: 'ale', clave: 'hbe', equipacion: '1ª', marca: 'nike.png', talla: 'L', nombre: '', numero: '', imagen1: 'hbe1-1.jpg', imagen2: 'hbe1-2.jpg'},
    { id: 37, equipo: 'Royal Antwerp F.C.', anho: '2000/01', tipo: 'club', zona: 'eur', pais: 'bel', clave: 'ant', equipacion: '1ª', marca: 'umbro.png', talla: 'L', nombre: '', numero: '10', imagen1: 'ant1-1.jpg', imagen2: 'ant1-2.jpg'},
    { id: 38, equipo: 'A.C. Sparta Praga', anho: '2001/02', tipo: 'club', zona: 'eur', pais: 'che', clave: 'spr', equipacion: '1ª', marca: 'nike.png', talla: 'L', nombre: '', numero: '', imagen1: 'spr1-1.jpg', imagen2: 'spr1-2.jpg'},
    { id: 39, equipo: 'Dinamo Zagreb F.C.', anho: '2011/13', tipo: 'club', zona: 'eur', pais: 'cro', clave: 'zag', equipacion: '1ª', marca: 'puma.png', talla: 'L', nombre: '', numero: '', imagen1: 'zag1-1.jpg', imagen2: 'zag1-2.jpg'},
    { id: 40, equipo: 'F.C. Copenhague', anho: '2012/13', tipo: 'club', zona: 'eur', pais: 'din', clave: 'cop', equipacion: '2ª', marca: 'adidas.png', talla: 'L', nombre: '', numero: '', imagen1: 'cop1-1.jpg', imagen2: 'cop1-2.jpg'},
    { id: 41, equipo: 'Samsuspor K.D.', anho: '2020/21', tipo: 'club', zona: 'eur', pais: 'tur', clave: 'sam', equipacion: '4ª', marca: 'macron.png', talla: 'L', nombre: '', numero: '', imagen1: 'sam1-1.jpg', imagen2: 'sam1-2.jpg'},
    { id: 42, equipo: 'New Yok Cosmos', anho: '1977 (réplica)', tipo: 'club', zona: 'ame', pais: 'usa', clave: 'nyc', equipacion: '1ª', marca: 'umbro.png', talla: 'L', nombre: 'Pelé', numero: '10', imagen1: 'nyc2-1.jpg', imagen2: 'nyc2-2.jpg'},
    { id: 43, equipo: 'New Yok Cosmos', anho: '2011/12', tipo: 'club', zona: 'ame', pais: 'usa', clave: 'nyc', equipacion: '1ª', marca: 'umbro.png', talla: 'L', nombre: '', numero: '', imagen1: 'nyc1-1.jpg', imagen2: 'nyc1-2.jpg'},
    { id: 44, equipo: 'Buriram United F.C.', anho: '2017', tipo: 'club', zona: 'asi', pais: 'tai', clave: 'bur', equipacion: '1ª', marca: '', talla: 'M', nombre: '', numero: '', imagen1: 'bur1-1.jpg', imagen2: 'bur1-2.jpg'}    
  ];

  constructor() { }

  getTodas(): Camiseta[] {
    return this.camisetas;
  }

  getTodasSelecciones(): Camiseta[] {   
    return this.camisetas.filter( (item) => {
      return item.tipo == 'seleccion';
    } ) ;
  }

  getTodosClubes(): Camiseta[] {
    return this.camisetas.filter( (item) => {
      return item.tipo == 'club';
    } ) ;
  }

  getTodosClubEsp(): Camiseta[] {
    return this.camisetas.filter( (item) => {
      return item.tipo == 'club' && item.pais == 'esp';
    } ) ;
  }

  getTodosClubIng(): Camiseta[] {
    return this.camisetas.filter( (item) => {
      return item.tipo == 'club' && item.pais == 'ing';
    } ) ;
  }

  getTodosClubEur(): Camiseta[] {
    return this.camisetas.filter( (item) => {
      return item.tipo == 'club' && item.zona == 'eur' && item.pais != 'esp' && item.pais != 'ing';
    } ) ;
  }

  getTodosClubNoEur(): Camiseta[] {
    return this.camisetas.filter( (item) => {
      return item.tipo == 'club' && item.zona != 'eur';
    } ) ;
  }

  getCamiseta(clave: string): Camiseta[] {
    return this.camisetas.filter( (item) => {
      return item.clave == clave;
    } ) ;
  }
}
