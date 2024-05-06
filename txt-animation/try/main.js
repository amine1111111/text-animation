let text = document.querySelector(".txt");

text.innerHTML = [...text.textContent].map(e =>`<span>${e}</span>`).join("");


let spans =  text.querySelectorAll("span");


spans.forEach((x, index) => x.addEventListener("mouseover", _ => {

    spans.forEach( (e, i) => {
      let distance = Math.abs(index - i)
      let delay = (distance * 0.1).toFixed(1)

      e.style.transitionDelay = `${delay}s`
    })
}))