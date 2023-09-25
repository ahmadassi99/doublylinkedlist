import node from './node.mjs';
class doubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
        
    }
    isEmpty(){
        if(this.head==null){
            return true;
        }
        else{return false;}
    }
    push(value){
        let temp=new node(value);
        if(this.isEmpty()){
            this.head=temp;
            this.tail=temp;
        }
        else{
            temp.previous=this.tail;
            this.tail.next=temp;
            this.tail=temp;

        }
        this.length++;
    }
    pop(){
        if(!this.head){
           console.log("list is Empty");
           return;
        }
        if(this.length===1){
            this.head==null;
            this.tail==null;
            //this.value=null;
        }
        else{
        let curr=this.tail;

        this.tail=this.tail.previous;
        this.tail.next= null;
        let delValue=curr.value;
        curr.previous=null;
        console.log("poped element:"+delValue);}
        this.length--;
    }
    shift(){
        if(this.isEmpty()){
            console.log("list is Empty");
            return;
        }
        if(this.length===1){
            this.head==null;
            this.tail==null;
        }
        else{

        let curr=this.head;
        this.head=this.head.next;
        this.head.previous=null;
        let delValue=curr.value;
        curr=null;
        console.log("shifted element:"+delValue);
        }
        this.length--;        
    }
    unshift(value){
        let temp=new node(value);
        if(this.isEmpty()){
            this.head=temp;
            this.tail=temp;
        }
        else{
            temp.next=this.head;
            this.head.previous=temp;
            this.head=temp;
        }
        this.length++;
    }
    get(index){
        if(index==0&&this.isEmpty()){
            console.log("empty list");
            return;
        }
        let curr=this.head;
        var count=0;
        while(index>count){
            if(curr===null){
                console.log("wrong index");
                return;
            }
            curr=curr.next;  
            count++;
        }
        let val=curr.value;
        //console.log("the value at this index:"+val);
        return console.log("the value at "+index+" index: "+val);
    }
    set(index,val){
        if(index==0&&this.isEmpty()){
            console.log("empty list");
            return;
        }
        let curr=this.head;
        var count=0;
        while(index>count){
            if(curr===null){
                console.log("wrong index");
                return;
            }
            curr=curr.next;  
            count++;
        }
        curr.value=val;
        //console.log("the value at this index:"+val);
        return console.log("Value at index:"+index+"Modifed to: "+val);
    }
    insert(index,val){
        if(index==0){return this.unshift(val);}
        if(index==(this.length-1)){return this.push(val);}
        
            let curr=this.head;
            var count=0;
            while(count<index){
                if(curr===null){
                    console.log("wrong index");
                    return;
                }  
                curr=curr.next;
                count++;
            }
            let newnode= new node(val);
            newnode.next=curr.next;
            newnode.previous=curr;
            curr.next.previous=newnode;
            curr.next=newnode;
            this.length++;
            return console.log("inserted index");
        
        
    }
    remove(index){
        if(index==0){return this.shift();}
        if(index==this.length-1){ return this.pop();}
        
            let curr=this.head;
            var count=0;
            while(count<index){
                if(curr===null){
                    console.log("wrong index");
                    return;
                }  
                curr=curr.next;
                count++;
            }
                let prev=curr.previous;
                let nex=curr.next;
                prev.next=nex;
                nex.previous=prev;
                let delValue=curr.value;
                curr=null;
                console.log("removed element:"+delValue);
                this.length--;
        
    }
    print(){
        if(!this.isEmpty()){
            let curr=this.head;
            while(curr!==null){
                console.log(curr.value);
                curr=curr.next;
            }
            
        }
    }
}
export {doubleLinkedList};

