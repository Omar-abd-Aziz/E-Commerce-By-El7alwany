
/*start btn to hide card div*/
document.querySelector(".btnCart").addEventListener("click", ()=>{
  document.querySelector(".divForCardsHasSelcDad").style.display="block"
})

document.querySelector(".btnToHide").addEventListener("click", ()=>{
  document.querySelector(".divForCardsHasSelcDad").style.display="none"
})
/*end btn to hide card div*/




/*start function to add card to cart*/
let arrayOfCardsHadAddToCart = []
window.onclick=(e)=>{
  
  /* start add to cart */
  if(e.target.classList.value.includes("btnForAddToCard")==true)
  {
    let src = e.target.parentNode.parentNode.children[0].children[0].src
    let nameOfCard = e.target.parentNode.children[0].innerText
    let priceOfCard = parseInt(e.target.parentNode.children[1].innerText)

    /**/
    if(arrayOfCardsHadAddToCart.includes(nameOfCard)==false)
    {
      arrayOfCardsHadAddToCart.push(nameOfCard)
      
      document.querySelector(".divForCardsHasSelc").innerHTML+=`
      
      <div class="cartDiv" data-price="${priceOfCard}" data-name="${nameOfCard}" data-src="${src}" data-number="">
        <img src="${src}">
        <div class="nameOfCardDad">
          <h2>${nameOfCard}</h2>
        </div>
        <div class="priceOfCardDad">
          <h2>${priceOfCard} Eg</h2>
        </div>
        <div class="quantityOfCardDad">
          <span class="low">-</span>
          <span style="width: 40px;">1</span>
          <span class="height">+</span>
        </div>
        <div class="totalPriceOfCardDad">
          <span class="totalPriceCard">${priceOfCard} Eg</span>
        </div>
        <div class="delOfCardDad">
          <img src="./imgs/delete.png" class="btnForDeletFromCart">
        </div>
      </div>
      
      ` 
    } else {
      Swal.fire(
        'المنتج موجود في السلة بالفعل',
      )
    }

    totalPrice()
  }
  /* end add to cart */

  /* start remove from cart */
  if(e.target.classList.value.includes("btnForDeletFromCart")==true)
  {
    e.target.parentNode.parentNode.remove()
    totalPrice()
    let name = e.target.parentNode.parentNode.children[1].innerText

    for(let i = 0; i < arrayOfCardsHadAddToCart.length; i++){ 
      if(arrayOfCardsHadAddToCart[i].trim()===name.trim())
      {
        arrayOfCardsHadAddToCart.splice(i, 1);
      }
    }
  }
  /* end remove from cart */



  /* start height btn + */
  if(e.target.classList.value.includes("height")==true)
  {
    e.target.parentNode.children[1].innerText++
    let mainNum = parseInt(e.target.parentNode.children[1].innerText)
    let pricee = parseInt(e.target.parentNode.parentNode.children[2].innerText)
    e.target.parentNode.parentNode.children[4].children[0].innerText=`${mainNum*pricee + " Eg"}`
    totalPrice()
  }
  /* end height btn + */


  /**/
  function totalPrice()
  {
    let ArrayOfPrie = Array.from(document.querySelectorAll(".totalPriceCard"))
    let TotalPrice = 0
    let numOfCardsHaveAdd=0

    ArrayOfPrie.forEach(e=>{
      numOfCardsHaveAdd++
      TotalPrice+=parseInt(e.innerText)
    })

    document.querySelector(".totalPrice").innerText=`${TotalPrice}`
    document.querySelector(".numOfCardsAdd").innerText=numOfCardsHaveAdd
  }
  /**/


  /* start low btn + */
  if(e.target.classList.value.includes("low")==true)
  {
    if(Number(e.target.parentNode.children[1].innerText>1))
    {
      e.target.parentNode.children[1].innerText--
      let mainNum = parseInt(e.target.parentNode.children[1].innerText)
      let pricee = parseInt(e.target.parentNode.parentNode.children[2].innerText)
      e.target.parentNode.parentNode.children[4].children[0].innerText=`${mainNum*pricee + " Eg"}`
    }
    totalPrice()
  }
  /* end low btn + */


}





/* start form */
document.querySelector(".hideForm").addEventListener("click", ()=>{
  hideForm()
})


repitform()
setInterval(repitform, 0.5)
function repitform() {

  document.querySelector(".cartOk").addEventListener("click", ()=>{
    if(parseInt(document.querySelector(".totalPrice").innerText)!==0)
    {
      document.querySelector(".formDad").style.display="block"
    }
  })

}




function hideForm()
{
  document.querySelector(".formDad").style.display="none"
}
/* end form */


//btn for scroll

let btnup = document.getElementById('btnup')

window.onscroll = function() {
  if (window.scrollY >= 200) {
    btnup.style.display = "block";
  } else {
    btnup.style.display = "none";
  }
};


btnup.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}




//btn for contact 
function L()
{
  
  let S=event.srcElement;
  location.href="#contact"

}

//end btn for contact



document.querySelector(".facebook-btn").addEventListener("click", ()=>{
  location.href="https://www.facebook.com/"
})

document.querySelector(".twitter-btn").addEventListener("click", ()=>{
  location.href="https://twitter.com/"
})

document.querySelector(".instagram-btn").addEventListener("click", ()=>{
  location.href="https://www.instagram.com/"
})

document.querySelector(".whatsapp-btn").addEventListener("click", ()=>{
  location.href="https://www.instagram.com/"
})




