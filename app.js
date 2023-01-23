const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote-text');
const advNo = document.querySelector('.advice-id');

btn.addEventListener("click", getAdvice);


function getAdvice()
{
  return fetch('https://api.adviceslip.com/advice')
  .then(resp => resp.json())
  .then(data => {
    advNo.textContent = data.slip.id;
    quote.textContent = data.slip.advice;
  });
}