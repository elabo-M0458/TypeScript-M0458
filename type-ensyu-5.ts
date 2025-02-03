interface Human{
    name : string;
}

interface SportsHuman extends Human{
    age : number;
}

class soccerHuman implements soccerHuman{
    name = "大迫";
    age = 33;
    introduction = () =>{
        console.log(this.name + "さんは、" + this.age + "歳です。"); 
    }
}

const oosako = new soccerHuman();

oosako.introduction();