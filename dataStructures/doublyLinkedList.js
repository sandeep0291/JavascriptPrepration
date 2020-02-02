// ******************************************* Doubly Linked List ***********************************************
// *******************************************                    ***********************************************
class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next= null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
    }

    addNodeAtHead(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addNodeAtTail(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    addNodeInBetween(value,index){

        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        let current = this.head;
        let previous;
        let count =0;

        while(count != index){
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = newNode;
        newNode.prev = previous;
        newNode.next = current;
        current.prev = newNode;

    }


    deleteNodeFromHead(){
        if(this.head.next == null){
            this.head = null;
            this.tail = null;
            return;
        }
        let current = this.head.next;

        current.prev = null;
        this.head.next = null;
        this.head = current;
    }

    deleteNodeFromTail(){
        if(this.head.next == null){
            this.head = null;
            this.tail = null;
            return;
        }
        let previous = this.tail.prev;
        previous.next = null;
        this.tail.prev = null;
        this.tail = previous;
    }

    deleteNodeInBetween(index){
        if(!this.head){
            return;
        }

        if(this.head.next == null){
            this.head =null;
            this.tail =null;
            return;
        }

        let current = this.head;
        let previous;
        let count =0;

        while(count != index){
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;
        current.next.prev = previous;
        current.prev = null;
        current.next = null;
        
    }
    

}

// Test
let doublyLink = new DoublyLinkedList();
doublyLink.addNodeAtTail(10);
doublyLink.addNodeAtTail(20);
doublyLink.addNodeAtTail(30);
