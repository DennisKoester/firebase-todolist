import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<any>;
  constructor(firestore: Firestore) {
    const coll = collection(firestore, 'todos');
    this.todos$ = collectionData(coll);

    this.todos$.subscribe((newTodos) => {
      console.log('Neue Todos sind:', newTodos);
    })
  }

}
