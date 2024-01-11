'use strict';

class Currency {
    constructor(USD, KRW, VND, unit) {
        this.USD = USD;
        this.KRW = KRW;
        this.VND = VND;
        this.unit = unit;
    }
}

let currencyRatio = {
    USD: new Currency(1, 1316.12, 24342.50, '달러'),
    KRW: new Currency(0.00076, 1, 18.50, '원'),
    VND: new Currency(0.000041, 0.054, 1, '동')
};

let fromCurrency = 'USD', toCurrency = 'USD';

let unitWords = ["", "만", "억", "조", "경"];
let splitUnit = 10000;

document
    .querySelectorAll("#from-list a")
    .forEach((menu) => menu.addEventListener("click", () => {
        //1. 버튼 가져오기
        //2. 버튼 교체
        document.getElementById("from-button").textContent = menu.textContent;
        //3. 교체된 버튼 변수에 저장
        fromCurrency = menu.textContent;
        //4. 클릭시 
        toConvert();
    }))

document
    .querySelectorAll('#to-list a')
    .forEach((menu) => menu.addEventListener('click', () => {
        document.getElementById('to-button').textContent = menu.textContent;
        toCurrency = menu.textContent;
        toConvert();
     }))

function toConvert() {
    //1. 값을 불러온다.
    let input = document.getElementById("from-input").value;
    //2. 계산한다.
    let result = input * currencyRatio[fromCurrency][toCurrency];
    //3. 반환하여 표시한다.
    document.getElementById("to-input").value = result;
    renderKr(input, result);
}

// 아래에서 위로 계산.

function fromConvert() {
    //1. 값을 받는다.
    let input = document.getElementById("to-input").value;
    //2. 계산한다.
    let result = input * currencyRatio[toCurrency][fromCurrency];
    //3. 반환하여 from-input에 전달.
    document.getElementById("from-input").value = result;
    renderKr(result, input);
}


//7. 만 단위로, 한글로 단위 표시.

// 조건: 값이 입력된다.
// 조건: 입력되는 곳은 from/to-input.
// 조건: 값이 입력될 때이므로 onkeyup으로 함수 부르기.

function renderKr(fromMoney, toMoney) {
    document
    .getElementById("from-unit")
    .textContent = read(fromMoney) + currencyRatio[fromCurrency]['unit'];

    document
    .getElementById("to-unit")
    .textContent = read(toMoney) + currencyRatio[toCurrency]['unit'];
}

function read(num) {
    let unitResult = "";
    let unitArray = [];

    for(let i=0 ; i<unitWords.length ; i++) {
        let Result = (num  % Math.pow(splitUnit, i+1))/Math.pow(splitUnit, i);
        Result = Math.floor(Result);
        if(Result > 0){
            unitArray[i] = Result;
        }
    }

    for(let i=0 ; i<unitArray.length ; i++) {
        if(!unitArray[i]) continue;
        unitResult = String(unitArray[i]) + unitWords[i] + unitResult; //unitResult를 다시 더하는 것은, 앞 순번 배열값을 뒤에 이어 붙이는 의미.
    }

    return unitResult;
}


// 값을 받는다.
// 그 값을 만 단위로 끊는다.
// ㄴ받은 값은 숫자 타입.
// ㄴ보낼 값은 스트링 타입.
// 끊고 사이에 '만', '원/달러/동'을 표시한다. 
// [from-unit/to-unit].value로 값을 넣는다.
