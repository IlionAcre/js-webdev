'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

/////////////////////////////////////////////////
// Username generator (same as yours)

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
// Movement creation (same as yours)

function crearMovimiento(value, indice) {
  const tipo = value >= 0 ? 'deposit' : 'withdrawal';
  const movimiento = document.createElement('div');
  movimiento.classList.add('movements__row');

  const tipoMovimiento = document.createElement('div');
  tipoMovimiento.classList.add('movements__type');
  tipoMovimiento.classList.add(`movements__type--${tipo}`);
  tipoMovimiento.textContent = indice + ' ' + tipo;

  const valorMovimiento = document.createElement('div');
  valorMovimiento.classList.add('movements__value');
  valorMovimiento.textContent = value + '€';

  movimiento.prepend(tipoMovimiento);
  movimiento.append(valorMovimiento);

  containerMovements.prepend(movimiento);
}

/////////////////////////////////////////////////
// Shared login function (auto or manual)

let currentAccount = null;

function login(account) {
  currentAccount = account;

  // Show second screen
  containerApp.style.opacity = 1;

  // Welcome text
  labelWelcome.textContent = `Welcome back, ${account.owner.split(' ')[0]}`;

  // Clear old movements
  containerMovements.innerHTML = '';

  // Load this account's movements
  account.movements.forEach((mov, idx) => crearMovimiento(mov, idx));
}

/////////////////////////////////////////////////
// Manual login handler (unchanged logic)

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  const foundAcc = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (foundAcc?.pin === Number(inputLoginPin.value)) {
    login(foundAcc);
  } else {
    labelWelcome.textContent = 'Login failed. Try again.';
  }

  inputLoginUsername.value = '';
  inputLoginPin.value = '';
  inputLoginPin.blur();
});

/////////////////////////////////////////////////
// 👉 Auto-login DEFAULT account1

login(account1);
