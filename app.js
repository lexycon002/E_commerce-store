const getElement = (selector) => {
    const element = document.querySelector(selector)
    if (element) return element
    throw Error(`please double check your class names, there is no ${selector} 
    class`
    )
}





const Links = getElement('nav')
const navBtnDOM = getElement('menuItem')

navBtnDOM.addEventListener('click',()=> {
Links.classList.toggle ('show-links')
})