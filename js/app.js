const initialStockPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#quantity-of-stocks");
const currentStockPrice = document.querySelector("#current-price");

const changeTheme = document.querySelector("#change-theme");

const checkBtn = document.querySelector(".check-btn");
const showMsg = document.querySelector(".show-msg");

const happyGif = document.querySelector(".happy-gif");
const sadGif = document.querySelector(".sad-gif");

happyGif.style.display = "none";
sadGif.style.display = "none";
showMsg.style.display = "none";

const calculateProfit = function (costPrice, sellingPrice) {
  const profit = sellingPrice - costPrice;
  const profitPercentage = (profit / costPrice) * 100;
  return [profit, profitPercentage];
};

const calculateLoss = function (costPrice, sellingPrice) {
  const loss = costPrice - sellingPrice;
  const lossPercentage = (loss / costPrice) * 100;
  return [loss, lossPercentage];
};

const showMessage = function (message) {
  showMsg.innerText = message;
};

function submitHandler() {
  showMsg.style.display = "block";
  const stocksQuantityValue = stocksQuantity.value;
  const priceOfInitialStock = initialStockPrice.value * stocksQuantityValue;

  const priceOfCurrentStock = currentStockPrice.value * stocksQuantityValue;

  if (
    stocksQuantity.value &&
    initialStockPrice.value &&
    currentStockPrice.value
  ) {
    if (
      stocksQuantity.value <= 0 ||
      initialStockPrice.value <= 0 ||
      currentStockPrice.value <= 0
    ) {
  
      showMsg.style.display = "block";
      const message = `zero or negative values are not allowed`;
      happyGif.style.display = "none";
      sadGif.style.display = "none";
      changeTheme.style.background = "white";
      showMessage(message);
    } else {
    
      if (priceOfInitialStock < priceOfCurrentStock) {
        const calculatedProfit = calculateProfit(
          priceOfInitialStock,
          priceOfCurrentStock
        );

        const message = `Hey, the profit is ${calculatedProfit[0].toFixed(
          2
        )} and the profit percentage is ${calculatedProfit[1].toFixed(2)}%`;

        changeTheme.style.background = "none";
        happyGif.style.display = "block";

        sadGif.style.display = "none";

        showMessage(message);
      } else if (priceOfInitialStock > priceOfCurrentStock) {
        const calculatedLoss = calculateLoss(
          priceOfInitialStock,
          priceOfCurrentStock
        );

        const message = `Hey, the loss is ${calculatedLoss[0].toFixed(
          2
        )} and the loss percentage is ${calculatedLoss[1].toFixed(2)}%`;
        if (calculatedLoss[1] > 50) {
          changeTheme.style.background = "red";
        }

        sadGif.style.display = "block";

        happyGif.style.display = "none";

        showMessage(message);
      } else {
        const message = "No Profit No Loss";
        showMessage(message);
        happyGif.style.display = "none";
        sadGif.style.display = "none";
        changeTheme.style.background = "yellow";
      }
    }
  } else {

    const message = `Please don't leave any field empty`;
    showMsg.style.display = "block";
    happyGif.style.display = "none";
    sadGif.style.display = "none";
    changeTheme.style.background = "none";
    showMessage(message);
  }

}

checkBtn.addEventListener("click", submitHandler);
