export const questions = [
    {
        img : './img/pictures/1.png',
        answer1 : 'Lydia и undefined',
        answer2 : 'Lydia и ReferenceError',
        answer3 : 'ReferenceError и 21',
        answer4 : 'undefined и ReferenceError',
        correctAnswer : 'undefined и ReferenceError',
        dist : `В функции мы сначала определяем переменную name с
        помощью ключевого слова var. Это означает,
        что name поднимется в начало функции.
        Name будет иметь значение undefined до тех пор,
        пока выполнение кода не дойдет до строки, где ей присваивается значение Lydia.
        Мы не определили значение name, когда пытаемся вывести ее в консоль, поэтому будет выведено undefined. Переменные, определенные с помощью ключевого слова let (и const), также поднимаются, но в отличие от var, не инициализируются.
        Доступ к ним до инициализации невозможен. Это называется "временной мертвой зоной".
        Когда мы пытаемся обратиться к переменным до их определения,
        JavaScript выбрасывает исключение ReferenceError.`
    },
    {
        img : './img/pictures/2.png',
        answer1 : '0 1 2 и 0 1 2',
        answer2 : '0 1 2 и 3 3 3',
        answer3 : '3 3 3 и 0 1 2',
        answer4 : '3 3 3 и 3 3 3',
        correctAnswer : '3 3 3 и 0 1 2',
        dist : `Из-за очереди событий в JavaScript функция setTimeout вызывается после завершения цикла. Так как переменная i в первом цикле определяется с помощью ключевого слова var, она является глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя оператор ++. К моменту выполнения setTimeout в первом примере значение i равняется 3. Во втором цикле i определяется с помощью let. Такие переменные (а также переменные, объявленные с помощью const) имеют блочную область видимости (блок - это код внутри {}). На каждой итерации i будет иметь новое значение, и это значение будет замкнуто в области видимости внутри цикла.`
    },
    {
        img : './img/pictures/3.png',
        answer1 : '20 и 62.83185307179586',
        answer2 : '20 и NaN',
        answer3 : '20 и 63',
        answer4 : 'NaN и 63',
        correctAnswer : '20 и NaN',
        dist : `
            Обратите внимание, что diameter - это обычная функция, а perimeter - стрелочная.
            У стрелочных функций, в отличие от обычных, значение this указывает на лексическое окружение.
            Это значит, что при вызове perimeter ее this указывает не на объект shape, а на внешнюю область видимости (объект window).
            У этого объекта нет свойства radius, поэтому возвращается undefined.
        `
    },
    {
        img : './img/pictures/4.png',
        answer1 : '1 и false',
        answer2 : '0 и true',
        answer3 : 'false и NaN',
        answer4 : 'false и false',
        correctAnswer : '1 и false',
        dist : `
           Унарный плюс приводит операнд к числу. true - это 1, а false - 0. Строка 'Lydia' - это истинное значение. Мы спрашиваем, является ли это истинное значение ложным? Ответ: false.
        `
    },
    {
        img : './img/pictures/5.png',
        answer1 : 'Hello',
        answer2 : 'Hey!',
        answer3 : 'undefined',
        answer4 : 'ReferenceError',
        correctAnswer : 'Hello',
        dist : `
           В JavaScript все объекты являются "ссылочными" типами данных, т.е. значения объектов передаются по ссылке. Сначала в переменной "c" создается ссылка на объект. Затем мы указываем переменной "d" ссылаться на тот же объект, что и "c". При изменении объекта меняются значения всех указывающих на него ссылок.
        `
    },
    {
        img : './img/pictures/6.png',
        answer1 : 'orange',
        answer2 : 'purple',
        answer3 : 'green',
        answer4 : 'TypeError',
        correctAnswer : 'TypeError',
        dist : `
           Функция colorChange() является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie - это экземпляр, статичный метод в нем не доступен. Поэтому выбрасывается исключение TypeError.
        `
    },
    {
        img : './img/pictures/7.png',
        answer1 : '{}',
        answer2 : 'ReferenceError: greetign is not defined',
        answer3 : 'undefined',
        answer4 : '""',
        correctAnswer : '{}',
        dist : `
           С помощью greetign = {} мы создаем новый глобальный пустой объект, который и выводится в консоль. Когда мы вместо greeting написали greetign, компилятор выполнил global.greetign = {} в Node.js (или window.greetign = {} в браузере). В строгом режиме ('use strict') будет выброшено исключение ReferenceError: greetign is not defined.
        `
    },
    {
        img : './img/pictures/8.png',
        answer1 : '\'dog\'',
        answer2 : 'SyntaxError',
        answer3 : 'undefined',
        answer4 : 'ReferenceError',
        correctAnswer : '\'dog\'',
        dist : `
          В JavaScript такое возможно, т.к. функции - это объекты. Точнее, функция — это специальный тип объекта, который можно вызывать. Кроме того, функция — это объект со свойствами. Свойства такого объекта нельзя вызывать, поскольку они не являются функциями.
        `
    },
    {
        img : './img/pictures/9.png',
        answer1 : 'TypeError',
        answer2 : 'SyntaxError',
        answer3 : 'Lydia Hallie',
        answer4 : 'undefined undefined',
        correctAnswer : 'TypeError',
        dist : `
          Нельзя добавлять свойства к конструктору как к обычному объекту. Если необходимо добавить свойство или метод всем экземплярам, то следует использовать прототипы. В данном случае Person.prototype.getFullName = function () { return this.firstName this.lastName } сделает метод member.getFullName() рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру Person нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь указанное свойство. Напротив, если мы добавим данный метод к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры.
        `
    },
    {
        img : './img/pictures/10.png',
        answer1 : 'Person {firstName: "Lydia", lastName: "Hallie"} и undefined',
        answer2 : 'Person {firstName: "Lydia", lastName: "Hallie"} и Person {firstName: "Sarah", lastName: "Smith"}',
        answer3 : 'Person {firstName: "Lydia", lastName: "Hallie"} и {}',
        answer4 : 'Person {firstName: "Lydia", lastName: "Hallie"} и ReferenceError',
        correctAnswer : 'Person {firstName: "Lydia", lastName: "Hallie"} и undefined',
        dist : `
          Мы создаем объект sarah без ключевого слова new. Использование new приводит к созданию нового объекта (экземпляра). Без new создается глобальный объект. Мы указали, что this.firstName равняется "Sarah" и this.lastName - "Smith". На самом деле, мы определили global.firstName = 'Sarah' и global.lastName = 'Smith'. sarah = undefined, поскольку мы не возвращаем значение из Person.
        `
    },
]

function randomItem() {
    return questions.sort(() => .5 - Math.random())
}

export const kwizItems = randomItem().map(createItems)

function createItems(item, i) {
    return `
        <!-- plate -->
        <div class="plate" data-plate>
    
            <!-- plate-header -->
            <div class="plate-header">
                <div class="plate-header__icon">
                    <img src="./img/icons/list.png" alt="Icon">
                </div>
                <div class="plate-header__title">Ваш уровень знания JS</div>
            </div>
            <!-- // plate-header -->
    
            <!-- Content ... -->
            <div class="plate-content">
                <h2 class="title-main">
                    <img class="title-main__img"  src="${item.img}" alt="">
                </h2>
                <div class="radio-group">
                    <!-- radio-block -->
                    <label class="radio-block" data-radio-block-parent>
                        <div class="radio-block__fake">
                            <div class="radio-block__fake--active"></div>
                        </div>
                        <div class="radio-block__text" data-answer='${item.answer1}'>${item.answer1}</div>
                    </label>
                    <!-- // radio-block -->
                    <!-- radio-block -->
                    <label class="radio-block " data-radio-block-parent>
                        <div class="radio-block__fake">
                            <div class="radio-block__fake--active"></div>
                        </div>
                        <div class="radio-block__text" data-answer='${item.answer2}'>${item.answer2}</div>
                    </label>
                    <!-- // radio-block -->
                    <!-- radio-block -->
                    <label class="radio-block" data-radio-block-parent>
                        <div class="radio-block__fake">
                            <div class="radio-block__fake--active"></div>
                        </div>
                        <div class="radio-block__text" data-answer='${item.answer3}'>${item.answer3}</div>
                    </label>
                    <!-- // radio-block -->
                    <!-- radio-block -->
                    <label class="radio-block" data-radio-block-parent>
                        <div class="radio-block__fake">
                            <div class="radio-block__fake--active"></div>
                        </div>
                        <div class="radio-block__text" data-answer='${item.answer4}'>${item.answer4}</div>
                    </label>
                    <!-- // radio-block -->
                </div>
                <div class="plate__answer">
                    <button
                     class="plate__answer-button"
                     type="button"
                     data-button-answer="answer"
                     >Ответить</button>
                </div>
                <div class="plate__correct-answer" data-corr-ans>
                    <div class="plate__correct-answer-title">Правильный ответ:
                       <span data-correct-answer='${item.correctAnswer}'> ${item.correctAnswer} </span>
                    </div>
                    <div class="plate__correct-answer-dist">${item.dist}</div>
                </div>
            </div>
    
            <!-- plate-footer -->
            <div class="plate-footer">
                <div class="plate-footer__progress">
    
                    <div class="progress">
                        <div class="progress__label">
                            Готово: <strong data-percent>56%</strong>
                        </div>
                        <div class="progress__line-wrapper">
                            <div class="progress__line-bar" data-progress-line></div>
                        </div>
                    </div>
    
                </div>
                <div class="plate-footer__buttons">
                    <a
                      href="#"
                      class="button"
                      data-next="${i + 2}"
                      >Далее</a>
                </div>
            </div>
            <!-- // plate-footer -->
    `
}