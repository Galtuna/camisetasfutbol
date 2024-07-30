import { Component, OnDestroy, OnInit } from '@angular/core';
import { Camiseta } from '../../models/camiseta';
import { CamisetasService } from '../../services/camisetas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-camisetas',
  templateUrl: './lista-camisetas.component.html',
  styleUrls: ['./lista-camisetas.component.css']
})
export class ListaCamisetasComponent {
  codigo: any;
  camisetas?: Camiseta[] = [];
  navigationSubscription: any;
  
  constructor(private ruta: ActivatedRoute, private servicioCamisetas: CamisetasService) {        
    // Recuperar el valor del parámetro enviado en la ruta
    this.ruta.paramMap.subscribe(params => {
      this.codigo = ruta.snapshot.params['codigo']; // nombre en el app.module.ts
      if (this.codigo == "todas-sel") {
        this.camisetas = servicioCamisetas.getTodasSelecciones();
      } else if (this.codigo == "todos-club") { 
        this.camisetas = servicioCamisetas.getTodosClubes();
      } else if (this.codigo == "todos-esp") { 
        this.camisetas = servicioCamisetas.getTodosClubEsp();
      } else if (this.codigo == "todos-ing") { 
        this.camisetas = servicioCamisetas.getTodosClubIng();
      } else if (this.codigo == "todos-eur") { 
        this.camisetas = servicioCamisetas.getTodosClubEur();
      } else if (this.codigo == "todos-mun") { 
        this.camisetas = servicioCamisetas.getTodosClubNoEur();
      } else {
        this.camisetas = servicioCamisetas.getCamiseta(this.codigo);
      }      
    });
  }  

}
