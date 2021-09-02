import { Component } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {

  public invoiceForm: FormGroup;
  // public userDetails: FormGroup;
  constructor(private _fb: FormBuilder) {}
  ngOnInit() {
    // this.userDetails = this._fb.group({username:[""], contactDetail:[""]});
    this.invoiceForm = this._fb.group({ 
      username:["", [Validators.required]], 
    contactDetail:["", [Validators.required,, Validators.minLength(10), Validators.pattern("^[0-9]*$")]], 
    checkConfirmation:[false],
      Rows: this._fb.array([this.initRows()])
    });
  }

  get formArr() {
    return this.invoiceForm.get("Rows") as FormArray;
  }

  initRows() {
    return this._fb.group({
      itemName: [""], quantity: [""]
    });
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  submit() {
    alert('Form submited - need to include http module and add it in imports array. also create a sendRequest service and add it providers arrays')
    // check 'Reactive Forms Part 3 - 45th min
  }

  // submitOrderForm=()=> {
  //   alert('Form submited - need to include http module and add it in imports array. also create a sendRequest service and add it providers arrays')
  // }
}
