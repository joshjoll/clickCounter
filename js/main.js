document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', subtract);
function add(input) {
  let num = document.querySelector('input[value]').value;
  let total = document.getElementById('total').textContent;
  num = parseInt(num, 10);
  total = parseInt(total, 10);
  total += num
  document.getElementById('total').textContent = total;
  if (total < 0) {
    document.getElementById('total').style.color = 'red';
  } else {
    document.getElementById('total').style.color = 'black';
  }
}
function subtract(input) {
  let num = document.querySelector('input[value]').value;
  let total = document.getElementById('total').textContent;
  num = parseInt(num, 10);
  total = parseInt(total, 10);
  total -= num
  document.getElementById('total').textContent = total;
  if (total < 0) {
    document.getElementById('total').style.color = 'red';
  } else {
    document.getElementById('total').style.color = 'black';
  }
}
