function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function aproxStirling(n) {
    return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
}

function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const factorialReal = factorial(numero);
    const factorialAprox = aproxStirling(numero);
    const error = Math.abs(factorialReal - factorialAprox);

    document.getElementById('resultado').innerHTML = `Factorial real: ${factorialReal}<br>
    Factorial aproximado (Stirling): ${factorialAprox}<br>
    Error: ${error}`;
}
