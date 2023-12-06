// ajouter-blocs.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlocService } from 'app/services/bloc-service.service';
import { Bloc } from 'app/models/bloc'; // Import your Bloc model
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-ajouter-blocs',
  templateUrl: './ajouter-blocs.component.html',
  styleUrls: ['./ajouter-blocs.component.scss']
})
export class AjouterBlocsComponent {
  blocForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private blocService: BlocService,private toast: NgToastService) {
    this.blocForm = this.fb.group({
      nomBloc: ['',  [Validators.required, Validators.maxLength(50),this.customValidator]],
      capaciteBloc: ['', [Validators.required, Validators.min(1)]],
      
    });
  }
  customValidator(control) {
    if (!control.value || control.value.trim() === '') {
      return { 'required': true };
    }
    return null;
  }
  
  submitBloc() {
    if (this.blocForm.valid) {
     
      const newBloc: Bloc = {
        idBloc: null, 
        nomBloc: this.blocForm.value.nomBloc,
        capaciteBloc: this.blocForm.value.capaciteBloc,
      
      };

      
      this.blocService.addBloc(newBloc).subscribe(
        (addedBloc) => {
          console.log('Bloc added successfully:', addedBloc);
          this.showSuccessMessage();
          
          this.router.navigate(['/admin/blocs']);
        },
        (error) => {
          console.error('Error adding bloc:', error);
        }
      );
    }
  }
  showSuccessMessage() {
    this.toast.success({ detail: 'Bloc ajouté avec succès', summary: 'Succès', duration: 5000 });
  }
  goBack(): void {
    this.router.navigate(['/admin/blocs']);
  }
}
