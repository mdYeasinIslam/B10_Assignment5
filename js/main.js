document.addEventListener('DOMContentLoaded', () => {
    // card-one
    document.getElementById('donate-now-button').addEventListener('click', function (e) {
        e.preventDefault()
        const inputValue = getInputFieldByID('input-field-one')
        const elementValue = getElement('donate-amount')
        const mainAmount = getElement('main-amount')
        if (mainAmount > inputValue) {
            if (inputValue > 0 && elementValue >= 0) {
                document.getElementById('donate-amount').innerText = elementValue + inputValue
                document.getElementById('main-amount').innerText = mainAmount - inputValue;
                my_modal_5.showModal()

                // update history section
                const makeHistorySect = document.getElementById('history-section')
                const donateArea = document.getElementById('donate-area').innerText
                console.log(donateArea)
                const div = document.createElement('div')
                div.innerHTML = ` 
                <h1>${inputValue} Taka is Donated for ${donateArea}</h1>
                `
                div.classList.add('history-style')
                makeHistorySect.appendChild(div)
            }
            else {
                alert('please donate more that 1 bdt')
            }
        }
        else {
            alert('sorry , you donnot have sufficient balance')

        }
    })
    // card-2
    
})