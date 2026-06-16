let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myleads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(Leads) {

    let listItems = ""

    for (i = 0; i < Leads.length; i++) {

        listItems +=
            ` <li>
               <a
                target='_blank'  href='${Leads[i]}'>
                ${Leads[i]}  
                </a>     
        </li>`

    }
    ulEl.innerHTML = listItems
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        render(myLeads)
    })
})







deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads = []
    render(myleads)
})



inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    render(myLeads)
})

