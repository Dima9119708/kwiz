export class Kwiz {
    constructor(selector, items, questions) {
        this.$el = document.querySelector(selector)
        
        this.items = items
        this.questions = questions.length
        
        this.reply = {
            right : 0,
            wrong : 0,
        }
        
        this.activePage = true
        
        this.__INIT__()
        this.onClick()
    }
    
    __INIT__ () {
        this.$el.innerHTML = this.items[0]
        
        const $plate = this.$el.querySelector('[data-plate]')
        this.animate($plate, 'plate--active', 200)
    }
    
    onClick() {
        this.handler = this.handler.bind(this)
        this.$el.addEventListener('click', this.handler)
    }
    
    handler(event) {
        event.preventDefault()
        
        const { next, buttonAnswer } = event.target.dataset
        const radioBlock = event.target.closest('[data-radio-block-parent]')
        
        
        if (next) {
            this.next(next)
        }
        
        
        if (this.activePage) {
            
            if (radioBlock) {
                this.radioButtonDOM(radioBlock)
            }
            else if (buttonAnswer) {
                
                const $answer = this.$el.querySelector('[data-answer="true"]')
                
                if ($answer) {
                    this.activePage = false
                    this.buttonAnswer($answer)
                }
            
            }
    
            const $result = this.$el.querySelector('[data-result]')
            if ($result) {
                this.activePage = false
                this.resultFinal($result)
            }
        }
        
    }
    
    animate(node, className, time) {
      setTimeout(() => {
          node.classList.add(className)
      }, time)
    }
    
    next(next) {
        this.activePage = true
        this.$el.innerHTML = this.items[next]
    
        
        const $plate = this.$el.querySelector('[data-plate]')
        this.animate($plate, 'plate--active', 200)
        
        
        const $percent = this.$el.querySelector('[data-percent]')
        if($percent) {
            const percent = this.percent(+next)
            $percent.innerHTML = percent
            
            const $progress = this.$el.querySelector('[data-progress-line]')
            $progress.style.width = percent
        }
    }
    
    radioButtonDOM(radioBlock) {
        
        const radioBlocks = this.$el.querySelectorAll('[data-radio-block-parent]')
    
        radioBlocks.forEach(item => {
            item.removeAttribute('data-answer')
            item.classList.remove('radio-block--active')
            item.children[0].children[0].style.display = 'none'
        })
    
        radioBlock.classList.add('radio-block--active')
        radioBlock.children[0].children[0].style.display = 'block'
        radioBlock.setAttribute('data-answer', true)
    }
    
    percent(number) {
        const length = this.items.length - 1
        return Math.ceil(number  / length  * 100)  + '%'
    }
    
    buttonAnswer($answer) {
        
        const $correctAnswerDiv = this.$el.querySelector('[data-corr-ans]')
        $correctAnswerDiv.style.maxHeight = $correctAnswerDiv.scrollHeight + 'px'
        $correctAnswerDiv.style.transition = 'max-height .4s linear'
    
        const { answer } = $answer
                            .querySelector('[data-answer]')
                            .dataset
    
        const { correctAnswer } = this.$el
                                    .querySelector('[data-correct-answer]')
                                    .dataset

        if (answer !== correctAnswer) {
            const $correct = this.$el
                                .querySelector(`[data-answer='${correctAnswer}']`)
                                .closest('[data-radio-block-parent]')
        
            $correct.classList.add('radio-block--false')
            
            this.reply.wrong += 1
            return
        }
    
        this.reply.right += 1
    }
    
    resultFinal($result) {
        $result.innerHTML = `
                <div class="result__item"> Всего вопрос: <span class="result-all">${this.questions}</span> </div>
                <div class="result__item"> Верно: <span class="result-right">${this.reply.right }</span> </div>
                <div class="result__item"> Неверно: <span class="result-wrong">${this.reply.wrong }</span> </div>
            `
    
        this.reply.right = 0
        this.reply.wrong = 0
    }
}

