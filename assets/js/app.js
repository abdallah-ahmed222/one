const iconContainer = document.querySelector( ".nav-mennu" );
const aside = document.querySelector( "aside" )
iconContainer.addEventListener( "click", function ()
{
    aside.classList.toggle( "active" )
    if ( aside.classList.contains( "active" ) )
    {
        iconContainer.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
    } else
    {
        iconContainer.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
} )
const itemsContainer = document.querySelector( ".items-container" )
// create Object
let itemsArray = [
    { name: "fish", price: 70 },
    { name: "chicken", price: 60 },
    { name: "pl7", price: 40 },
    { name: "cola", price: 10 },
    { name: "peps", price: 15 },
    { name: "sting", price: 7 },

]
function createElements( name, price )
{
    let col = document.createElement( "div" )
    col.dataset.cost = `${ price }`
    col.className = "col text-center"
    let heading = document.createElement( "h5" )
    heading.className = "card-title"
    heading.append( document.createTextNode( name ) )
    let itemPrice = document.createElement( "p" )
    itemPrice.className = "card-text"
    itemPrice.append( document.createTextNode( price ) )
    col.append( heading )
    col.append( itemPrice )
    itemsContainer.append( col )
}
itemsArray.forEach( item =>
{
    createElements( item.name, item.price )
} )
let inpOne = document.querySelector( ".inp-one" )
let inpTwo = document.querySelector( ".inp-two" )
let btnOne = document.querySelector( ".btn-one" )
let btnTwo = document.querySelector( ".btn-two" )
let sortUpInput = document.querySelector( ".sort-up" )
let sortDownInput = document.querySelector( ".sort-down" )
btnOne.addEventListener( "click", function ( e )
{
    e.preventDefault()
    itemsContainer.innerHTML = ""
    checkPrice()
    inpOne.blur()
    inpOne.value = ""
    btnOne.blur()
} )
function checkPrice()
{
    let backPrice = itemsArray.filter( function ( e )
    {
        return e.price <= Number( inpOne.value )
    } )
    backPrice.forEach( newItem =>
    {
        createElements( newItem.name, newItem.price )
    } )
}
btnTwo.addEventListener( "click", function ( e )
{
    e.preventDefault()
    itemsContainer.innerHTML = ""
    checkName()
    inpTwo.value = ""
    inpTwo.blur()
    btnTwo.blur()
} )
function checkName()
{
    let backName = itemsArray.filter( function ( e )
    {
        return e.name.includes( inpTwo.value )
    } )
    backName.forEach( newItem =>
    {
        createElements( newItem.name, newItem.price )
    } )
}
sortUpInput.addEventListener( "click", function ()
{
    sortUp()
} )
function sortUp()
{
    let exictItems = Array.from( itemsContainer.children )
    itemsContainer.innerHTML = ""
    exictItems.sort( ( a, b ) =>
    {
        return a.dataset.cost - b.dataset.cost
    } )
    exictItems.forEach( ( item ) =>
    {
        item[ 0 ]
        createElements( item.childNodes[ 0 ].textContent, item.childNodes[ 1 ].textContent )
    } )
}
sortDownInput.addEventListener( "click", function ()
{
    sortdown()
} )
function sortdown()
{
    let exictItems = Array.from( itemsContainer.children )
    itemsContainer.innerHTML = ""
    exictItems.sort( ( a, b ) =>
    {
        return b.dataset.cost - a.dataset.cost
    } )
    exictItems.forEach( ( item ) =>
    {
        item[ 0 ]
        createElements( item.childNodes[ 0 ].textContent, item.childNodes[ 1 ].textContent )
    } )
}
