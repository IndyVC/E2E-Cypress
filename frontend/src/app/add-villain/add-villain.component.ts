import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-add-villain',
  templateUrl: './add-villain.component.html',
  styleUrls: ['./add-villain.component.scss']
})
export class AddVillainComponent implements OnInit {

  villainForm: FormGroup;

  constructor(private fb: FormBuilder, private villainService: VillainService) { }

  ngOnInit(): void {
    this.villainForm = this.fb.group({
      villain: ['', Validators.required],
      movie: ['', Validators.required],
      actor: ['', Validators.required],
      year: [null, Validators.required],
    });
  }

  add() {
    this.villainService.addVillain(this.villainForm.value);
  }

  cancel() {

  }
}
