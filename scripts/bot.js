const bot_form = document.querySelector('.bot-form')
const bot_show = document.querySelector('.show-bot')
const bot_input = document.querySelector(".bot-input")
const bot_btn = document.querySelector(".bot-btn")
const bot_content = document.querySelector(".bot-content")
const bot_close = document.querySelector('.close-bot')
function enterMassage(evt){
    let answerHelp = 0
    let massage = document.createElement('div')
    if(bot_input.value == ""){
        return false
    }else{
    massage.innerHTML = `${bot_input.value}`
    massage.classList.add('bot-massage')
    massage.style.float = 'right'
    massage.style.borderBottomRightRadius = '0px'
    massage.style.borderBottomLeftRadius = '12px'
    bot_content.appendChild(massage)
    bot_input.value = ""
        if(massage.indexOf("Помощь")){
            answerHelp++
            const answer = document.createElement('div')
            answer.innerHTML = `Задавайте вопрос и мы на него ответим!`
            answer.classList.add('bot-massage')
            bot_content.appendChild(answer)
            
        }else if(massage.indexOf("Ы")){
            answerHelp++
            const answer = document.createElement('div')
            answer.innerHTML = `ЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫЫ`
            answer.classList.add('bot-massage')
            bot_content.appendChild(answer)
            
        }

    }
}
bot_content.scrollTop = bot_content.scrollHeight;
bot_input.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
       event.preventDefault();
       enterMassage()
    }
 });
const forShowTimeoutClose= () => { bot_show.style.right = '120px'}
const forShowTimeoutShow= () => { bot_form.style.bottom = '0px'}
bot_close.addEventListener('click', function(evt){
    bot_form.style.bottom = '-420px'
    setTimeout(forShowTimeoutClose, 500)

})
bot_show.addEventListener('click', function(evt){
    
    bot_show.style.right = '-100px'
    setTimeout(forShowTimeoutShow, 1000)


})
bot_btn.addEventListener('click', enterMassage)

