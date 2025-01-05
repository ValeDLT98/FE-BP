import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes/clientes.service';
import { Cliente } from '../../interfaces/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportesService } from '../../services/reportes/reportes.service';
import { Reporte } from '../../interfaces/reporte';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  public filteredReportes = [];
  public clientes: Cliente[] = [];
  public reportes: Reporte[] = [];

  constructor(
    private clienteService: ClientesService,
    private reporteService: ReportesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.clienteService
      .getAllClients()
      .subscribe((clientes) => (this.clientes = clientes));
  }

  public myForm: FormGroup = this.fb.group({
    cliente: ['', [Validators.required]],
    fechaInicio: ['', [Validators.required]],
    fechaFin: ['', [Validators.required]],
  });

  onSave() {
    const { cliente, fechaInicio, fechaFin } = this.myForm.value;

    this.reporteService
      .generateReport(cliente, fechaInicio, fechaFin)
      .subscribe((reporte) => (this.reportes = reporte));
  }

  validateForm() {
    if (this.myForm.invalid) {
      return true;
    }

    return false;
  }

  generatePDF() {
    const element = document.getElementById('table');

    html2canvas(element!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF();

      doc.setFontSize(18);
      doc.text('Estado de cuenta', 10, 10);

      const imgWidth = 190;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 20;

      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save('reporte.pdf');
    });
  }
}
