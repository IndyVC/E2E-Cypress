import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Villain } from '../villain.model';

export interface AddVillainResult {
  persist: boolean;
  villain?: Villain;
}

@Component({
  selector: 'app-add-villain',
  templateUrl: './add-villain.component.html',
  styleUrls: ['./add-villain.component.scss'],
})
export class AddVillainComponent implements OnInit {
  villainForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.villainForm = this.fb.group({
      movie: ['', [Validators.required, Validators.minLength(2)]],
      villain: ['', [Validators.required, Validators.minLength(2)]],
      actor: ['', [Validators.required, Validators.minLength(2)]],
      year: [
        null,
        [Validators.required, Validators.min(1900), Validators.max(2100)],
      ],
    });
  }

  add(): AddVillainResult {
    return {
      persist: true,
      villain: this.villainForm.value,
    };
  }

  cancel(): AddVillainResult {
    return {
      persist: false,
    };
  }
}
