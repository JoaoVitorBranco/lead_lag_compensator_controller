export class TypeOfFormula {
    constructor (){
        this.num = "1";
    }
    static getParam1(num){
        if(num === "1") return "Kc = ";
        else return "Kc = ";
    }

    static getParam2(num){
        if(num === "1") return "zc = ";
        else return "a = ";
    }

    static getParam3(num){
        if(num === "1") return "pc = ";
        else return "b = ";
    }

    static getFormula(num){
        if(num === "1") return "Kc × (s + zc) ÷ (s + pc)";
        else return "Kc × (a × s + 1) ÷ (b × s + 1)";
    }


}