const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const convertButton = document.getElementById('convert-button');
const convertedAmountSpan = document.getElementById('converted-amount');
const exchangeRates = {
    USD: {
        EUR: 0.95,
        INR: 80
    },
    EUR: {
        USD: 1.05,
        INR: 84
    },
    INR: {
        USD: 0.0125,
        EUR: 0.012
    }
};

convertButton.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (fromCurrency === toCurrency) {
        convertedAmountSpan.textContent = amount;
        return;
    }

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * exchangeRate;
    convertedAmountSpan.textContent = convertedAmount.toFixed(2);
});
