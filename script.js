window.onload = function () {
    let num = '';
    let num2 = '';
    let oper = '';
    let end = false;

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const operation = ['-', '+', '*', '/', '%', '±'];

    const display = document.querySelector('.calc-screen p');

    function clear() {
        num = '';
        num2 = '';
        oper = '';
        end = false;
        display.textContent = '';
    }
    document.querySelector('.allclear').onclick = clear;

    document.querySelector('.buttons').onclick = (event) => {
        if (!event.target.classList.contains('btn')) return;
        if (event.target.classList.contains('allclear')) return;

        display.textContent = '';

        let content = event.target.textContent;

        if (numbers.includes(content)) {

            if (num2 === '' && oper === '') {
                num += content;
                display.textContent = num;
            }
            else if (num !== '' && num2 !== '' && end) {
                num2 = content;
                end = false;
                display.textContent = num2;
            }
            else {
                num2 += content;
                display.textContent = num2;
            }

            console.log(num, num2, oper);

            return;
        }

        if (operation.includes(content)&&content!='±'){
            if(num==''&&num2==''){
                content='научись использовать бальбулятор';
            }
            oper = content;
            display.textContent = oper;
            return;
        }

        if (content == '±') {
            if (num2 == '') {
                num *= -1;
                console.log(num);
                display.textContent=num;
            }
            else if (num2 != '') {
                num2 *= -1;
                display.textContent = num2;
                console.log(num2);
            }
        }

        if (content === '=') {
            if (num2 === '') num2 = num;
            switch (oper) {
                case '+':
                    num = (+num) + (+num2);
                    break;
                case '-':
                    num = (+num) - (+num2);
                    break;
                case '*':
                    num *= num2;
                    break;
                case '/':
                    let c = (num /= num2);
                    num = c.toFixed(5);
                    break;
                case '%':
                    num = (num / 100 * (num2));
                    break;
            }
            end = true;
            display.textContent = Number(num);
        }
    }
}