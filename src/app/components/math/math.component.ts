import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  private mathData: Array<any>;
  private counter: number = 1;
  private hint: boolean = false;
  private form: FormGroup;
  private panelClass = 'panel panel-info';
  private buttonHint = '提示';
  private showNext = false;
  private messageClass;
  private message;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) { this.createForm() }

  createForm() {
    this.form = this.formBuilder.group({
      option: ['', Validators.required]
    });
  }

  showHint() {
    if (this.hint === true) {
      this.hint = false;
      this.buttonHint = '提示';
    } else {
      this.hint = true;
      this.buttonHint = '返回';
    }
  }

  disableForm() {
    this.form.controls['option'].disable();
  }

  onAnswerSubmit() {
    let anwser = this.form.get('option').value;
    if (anwser !== '2') {
      this.panelClass = 'panel panel-danger';
      this.messageClass = 'alert alert-danger';
      this.message = '再接再厲';
    } else {
      this.panelClass = 'panel panel-success';
      this.messageClass = 'alert alert-success';
      this.message = 'Good Job!';
    }
    this.disableForm();
    this.showNext = true;
  }

  ngOnInit() {
    this.dataService.getMathData().subscribe(data => {
      this.mathData = data;
      console.log(data);
    });
  }

}
