import { Injectable } from '@angular/core';


// injectable seervice
@Injectable()
export class MessageService {
  // erschaffe messages als string liste
 messages: string[] = [];

// function to add messages
 add(message: string) {
   this.messages.push(message);
 }

// function to clear message cache
 clear() {
  // leere List
   this.messages = [];
 }


}
