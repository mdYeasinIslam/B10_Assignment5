// make donate and history button active style
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('donate-button').addEventListener('click', function () {
        const button1 = document.getElementById('donate-button');
        button1.classList.add('background')
    
        const button2 = document.getElementById('history-button')
        button2.classList.remove('background')
        const btnOneDisable = document.getElementById('card-section')
        btnOneDisable.classList.remove('hidden')

        const makeHistoryDiasable = document.getElementById('history-section')
        makeHistoryDiasable.classList.add('hidden')
    
    }) 
    document.getElementById('history-button').addEventListener('click', function () {
    
        const button2 = document.getElementById('history-button')
        button2.classList.add('background')
    
        const button1 = document.getElementById('donate-button');
        button1.classList.remove('background')
        const btnOneDisable = document.getElementById('card-section')
        btnOneDisable.classList.add('hidden')
        const makeHistoryDiasable = document.getElementById('history-section')
        makeHistoryDiasable.classList.remove('hidden')
    })
})

