
//1. 박스 두개 만들기 (hmtl)
//2. Dropdown 리스트 만들기
//3. 환율정보 가져오기
//4. Dropdown 리스트에서 아이템 선택 시, 아이템 변경되도록 설정
//4-1. 박스와 버튼에 from/to로 id를 구분
//4-2. list의 item에 <a>태그에 클릭 이벤트 주기

//5. 금액을 입력하면 환전이 된다.

//6. Dropdown 리스트에서 아이템을 선택하면 다시 해당 단위 기준으로 환전됨

//7. 숫자를 한국어로 읽기 (--만--원)

//8. 반대로 밑에 박스에서 숫자를 바꿔도 위 박스 환율에 적용된다.


//환율정보 정의
let currencyRatio =  {
    KRW:{
        KRW:1,
        USD:0.00078,
        EUR:0.00071,
        JPY:0.11,
        CNY:0.0055,
        unit:"원"
    },
    USD:{
        KRW:1289.91,
        USD:1,
        EUR:0.91,
        JPY:141.67,
        CNY:7.13,
        unit:"달러"
    },
    EUR:{
        KRW:1416.98,
        USD:1.1,
        EUR:1,
        JPY:155.68,
        CNY:7.83,
        unit:"유로"
    },
    JPY:{
        KRW:9.1,
        USD:0.0071,
        EUR:0.0064,
        JPY:1,
        CNY:0.05,
        unit:"엔"
    },
    CNY:{
        KRW:181,
        USD:0.14,
        EUR:0.13,
        JPY:19.88,
        CNY:1,
        unit:"위안화"
    }
}

/* 객체 값 호출
//1. console.log(currencyRatio.CNY.unit);
//2. ***
console.log(currencyRatio['KRW']["unit"]);
//3. mix
//console.log(currencyRatio['KRW'].unit);
*/

let fromCurrency = 'KRW'
let toCurrency = 'KRW'

document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu=>menu.addEventListener("click",function(){
        //1. button 가져오기(getElementById) -> button 값 변경(textContent), this : 선택한
        document.getElementById("from-button").textContent = this.textContent;
        
        //2. 선택된 currency 값을 변수(drop down 버튼)에 저장
        fromCurrency = this.textContent;
    }));
    //document 객체 : html 파일의 태그들을 들고올 수 있는 기능 제공
    //querySelectorAll : html의 요소를 js로 들고올 수 있게 해주는 역할, list가 여러개이기에 All

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu=>menu.addEventListener("click", function(){
         //1. button 가져오기(getElementById) -> button 값 변경(textContent), this : 선택한
         document.getElementById("to-button").textContent = this.textContent;
         
         //2. 선택된 currency 값을 변수(drop down 버튼)에 저장
         toCurrency = this.textContent;
}));