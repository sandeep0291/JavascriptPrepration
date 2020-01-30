
class Node{
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}


class LinkedList{

  constructor(){
      this.head = null;
  }

  addNodeAtEnd(value){
      const newNode = new Node(value);
      let last = null;
      if(this.head===null){
          this.head = newNode;
          return;
      }
      // find last node, last node next pointer will be null
          last = this.head;
          while(last.next !== null){
             last = last.next; 
          }
          last.next = newNode;
  }

  addNodeAtHead(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head= newNode;
  }

  addNodeInBetween(value, index){
   if(index==0) return this.addNodeAtHead(value);

   const newNode = new Node(value);
   
   let current = this.head;
   let previous;
   let counter =0;
   
   while(counter < index){
     previous = current;
     current = current.next;
     counter++;
   }
   newNode.next = current;
   previous.next = newNode;

  }

  deleteNodeFromHead(){
    if(!this.head){
        return;
    }
    this.head = this.head.next;
  }

  deleteNodeFromTail(){
    if(!this.head){
        return;
    }
    let tail = this.head;
    while(tail.next.next !== null){
      tail = tail.next;
    }
   
   tail.next = null;
    
  }

  deleteNodeWithIndex(index){
    if(!this.head){
        return;
    }
    if(index==0) this.head=null;

    let current = this.head;
    let previous;
    let count = 0;
    while(count < index){
      previous = current;
      current = current.next;
      count++;
    }
   
   previous.next = current.next;
   current.next = null;

   
  }


}


var link = new LinkedList();
link.addNodeAtEnd(100);
link.addNodeAtEnd(200);
link.addNodeAtEnd(300);
link.addNodeAtEnd(400);
link.addNodeAtEnd(500);
console.log(link);
