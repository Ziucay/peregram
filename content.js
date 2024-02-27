var patternPrice = "[0-9]+,[0-9]{2}";
var patternGrams = "[0-9]+г"
// TODO: add kg support
// TODO: convert to kg for bigger amounts
// TODO: add ml support
function parseCards()
{
    let cardsNew = document.getElementsByClassName("product-card__content");
    let title, price;
    let matchPrice, matchGrams, priceParsed;
    for (var i = 0; i < cardsNew.length; i++)
    {
        title = cardsNew[i].getElementsByClassName("product-card__title")[0];
        price = cardsNew[i].getElementsByClassName("price-new")[0];

        matchPrice = price.innerText.match(patternPrice);
        matchGrams = title.innerText.match(patternGrams);
        if (matchPrice !== null && matchGrams !== null)
        {
            priceParsed = parseFloat(matchPrice[0].replace(',','.'));
            matchGrams = parseInt(matchGrams[0].slice(0, -1));
            if (matchGrams != 0)
            {
                price.innerText = matchPrice[0] + `(${((priceParsed / matchGrams) * 100).toFixed(2)}/100гр)`
                price.style.fontSize = "14px";
            }
        }
    }
}

var intervalId = setInterval(parseCards, 5000); // 10000 milliseconds = 10 seconds