import { Component, OnInit } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  constructor(private animappService: AnimappService) {}

  ngOnInit(): void {}

  get resultados() {
    return this.animappService.resultados;
  }
}
