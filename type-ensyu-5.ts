interface Human{
    name : string;
}

interface sportsPlayer extends Human {
    age : number;
}

class soccerHuman implements sportsPlayer{
    name = "大迫";
    age = 33;
    introduceMyself = () =>{
        console.log(this.name + "さんは、" + this.age + "歳です。"); 
    }
}

const oosako = new soccerHuman();

oosako.introduceMyself();