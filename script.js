// API URL
// https://v6.exchangerate-api.com/v6/6554a1689ed441693b445f67/latest/USD

const currencyElOne = document.getElementById('currency-one');
const currencyElTwo = document.getElementById('currency-two');
const amountCurrencyElOne = document.getElementById('amount-one');
const amountCurrencyElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');

const swap = document.getElementById('swap');

const calculate = () => {
	const currencyOne = currencyElOne.value;
	const currencyTwo = currencyElTwo.value;

	fetch(
		`https://v6.exchangerate-api.com/v6/6554a1689ed441693b445f67/latest/${currencyOne}`
	)
		.then((res) => res.json())
		.then((data) => {
			const rate = data.conversion_rates[currencyTwo];

			console.log(rate, 'rate');

			rateEl.innerText = `1 (${currencyOne}) = ${rate} (${currencyTwo})`;

			amountCurrencyElTwo.value = (amountCurrencyElOne.value * rate).toFixed(2);
		});

	console.log('test');
};

// Events
currencyElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);
amountCurrencyElOne.addEventListener('input', calculate);
amountCurrencyElTwo.addEventListener('input', calculate);

swap.addEventListener('click', (e) => {
	let temp = currencyElOne.value;
	currencyElOne.value = currencyElTwo.value;
	currencyElTwo.value = temp;
	calculate();
});

calculate();
