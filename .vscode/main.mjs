
import {doubleLinkedList} from './doublyLinkedList.mjs';
const doubleLL=new doubleLinkedList();
//push 1,2,3,4,5
doubleLL.push(1);
doubleLL.push(2);
doubleLL.push(3);
doubleLL.push(4);
doubleLL.push(5);
doubleLL.print()
//pop last two elemnts
doubleLL.pop();
doubleLL.pop();
doubleLL.print();
//shift to delete the first element
doubleLL.shift();
doubleLL.print();
//unshift 1
console.log("");
doubleLL.unshift(1);
doubleLL.print();
//get value of any index i start index from 0
doubleLL.get(2);
//test wrong index
doubleLL.get(50);
//set value for a specifec index
doubleLL.set(1,19);
doubleLL.set(4,23);
doubleLL.print();
//insert at specifec index
doubleLL.insert(1,15);
doubleLL.insert(2,13);
//here when the index is the tail the push method is called
doubleLL.insert(22,27);
doubleLL.print();
//remove at spesfic index
doubleLL.remove(2);
doubleLL.print();

doubleLL.remove(3);
//test remove wrong index
doubleLL.remove(145);
doubleLL.print();

