import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-reactive-component',
  styleUrl: './form-reactive-component.css',
  templateUrl: './form-reactive-component.html',
})
export class FormReactiveComponent {

  //variables group
  profileForm = new FormGroup({
    nombre: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    apellidos: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    tel: new FormControl<string>('', [Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    nombreMascota: new FormControl<string>('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    especie: new FormControl<'Perro' | 'Gato' | ' Ave' | 'Otro' | ''>('', [Validators.required]),
    sexo: new FormControl(''),// radio
    raza: new FormControl<string>('', [Validators.maxLength(40)]),
    edad: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(30)]),
    peso: new FormControl<number | null>(null, [Validators.required, Validators.min(0.1), Validators.max(90)]),
    numMicrochip: new FormControl(''),
    contrasena: new FormControl<string>('', [Validators.required, Validators.pattern(/^\d{15}$/)]),
    motivoVisita: new FormControl<string>('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
    politicaPrivacidad: new FormControl('', [Validators.requiredTrue]), //checkbox
    recordatorios: new FormControl(''), //checkbox
  });


  //métodos
  isInvalidField(field: string) {
    return this.profileForm.get(field)?.invalid && (this.profileForm.get(field)?.dirty || this.profileForm.get(field)?.touched);
  }

  hasError(field: string, error: string): boolean {
    const control = this.profileForm.get(field);
    return !!(control && control.hasError(error));
  }

}
