import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dictionary } from './dictionary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newDictionary : Dictionary = {} as Dictionary
  dictionaryList : Dictionary[] = []

  saveData(form: NgForm) {
    this.dictionaryList.push(this.newDictionary)
    this.newDictionary = {} as Dictionary
    form.resetForm()
  }

  checkWord() {
    const index = this.dictionaryList.findIndex(
      d => d.word === this.newDictionary.word
    )

    return index !== -1
  }
}
