class Textbox {
    constructor(selector,pattern){
        this.selector = selector
        this.pattern = pattern
        this._elements = document.querySelectorAll(this.selector)
        this._invalidSymbols = pattern

    }
    get value(){
        return value
    }
    set value(v){
        value = v
    }
    get elements(){
        return document.querySelectorAll(this.selector)
    }

    isValid(){
        for(ele of this.elements){
            if (ele.value.test(this._invalidSymbols)){
                return false
            }
        }
        return true
    }

}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
