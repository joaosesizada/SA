function criaCPF() {
    const res = document.getElementById('cpf-gerado')
    const digitos = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

    function calcDigit(digitos, pesoInicial) {
        const soma = digitos.reduce((acc, vl, index) => acc + vl * (pesoInicial - index), 0);
        const digito = 11 - (soma % 11);
        return digito > 9 ? 0 : digito;
    }

    const digitoOne = calcDigit(digitos, 10)
    digitos.push(digitoOne)

    const digitoTwo = calcDigit(digitos, 11)
    digitos.push(digitoTwo)
    const cpf = digitos.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    res.innerHTML = `
    <h3 id="value-cpf-copy">${cpf}</h3>
    <button id="copy-cpf-alg" onclick="copyText('value-cpf-copy')"><i class="fa-regular fa-copy"></i></button>`
}

function copyText(id) {
    const copyText = document.getElementById(id).textContent;
    const tempInput = document.createElement('input');
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function checkCPF() {
    const cpf = document.getElementById('cpf-validar').value
    const res = document.getElementById('cpf-validado')

    const cpfLimpo = cpf.replace(/\D+/g, '');
    if (cpfLimpo < 11) {
        res.innerHTML = '<h3>CPF digitado inválido</h3>'
    }

    const arrayCPF = Array.from(cpfLimpo).slice(0, 9);
    let multOne = 10
    const vlOne = arrayCPF.reduce((acc, vl) => {
        acc += (vl * multOne)
        multOne--
        return acc
    }, 0);
    const digOne = 11 - (vlOne % 11);
    arrayCPF.push(digOne > 9 ? 0 : digOne);

    let multTwo = 11;
    const vlTwo = arrayCPF.reduce((acc, vl) => {
        acc += (vl * multTwo)
        multTwo--
        return acc
    }, 0);
    const digTwo = 11 - (vlTwo % 11);
    arrayCPF.push(digTwo > 9 ? 0 : digTwo);

    const ValidCpf = arrayCPF.join('').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    if(arrayCPF.join('') === cpfLimpo) {
        res.innerHTML = `<h3>CPF Valído</h3>`
        return true
    }

    res.innerHTML = `<h3>CPF Inválido</h3>`
    return false
}

function ordenarNumeros() {
    const input = document.getElementById("arrayInput").value;
    const resultDisplay = document.getElementById("sortedResult");
    const interactionCountDisplay = document.getElementById("interactionCount");
    const sortingStepsLog = document.getElementById("sortingStepsLog");

    // Limpa os resultados anteriores
    resultDisplay.innerHTML = '';
    sortingStepsLog.innerHTML = '';
    sortingStepsLog.style.display = 'none';
    interactionCountDisplay.textContent = '0';

    // Verifica se o input está vazio
    if (!input.trim()) {
      resultDisplay.innerHTML = "Por favor, insira uma lista de números separados por vírgula.";
      return;
    }

    // Converte os valores do input em um array de números
    let numbersArray = input.split(",").map(Number);

    // Verifica se o array tem apenas um número
    if (numbersArray.length === 1) {
      resultDisplay.innerHTML = "Apenas um número foi inserido. Ordenação não é necessária.";
      return;
    }

    let n = numbersArray.length;
    let interactions = 0;
    let isSorted = false;

    // Bubble Sort com contador de interações e registro das etapas de ordenação
    for (let i = 0; i < n - 1 && !isSorted; i++) {
      isSorted = true;
      for (let j = 0; j < n - i - 1; j++) {
        interactions++;
        if (numbersArray[j] > numbersArray[j + 1]) {
          // Troca de valores
          [numbersArray[j], numbersArray[j + 1]] = [numbersArray[j + 1], numbersArray[j]];
          isSorted = false;

          // Mostra a etapa atual da ordenação
          sortingStepsLog.style.display = 'block';
          sortingStepsLog.innerHTML += `<div>${numbersArray.join(", ")}</div>`;
        }
      }
    }

    // Exibe o array ordenado final
    resultDisplay.innerHTML = `Array ordenado: ${numbersArray.join(", ")}`;
    
    // Exibe o número total de interações
    interactionCountDisplay.textContent = interactions;
  }

  function ordenarInsertion() {
    const input = document.getElementById("insertionInput").value;
    const resultDisplay = document.getElementById("insertionSortedResult");
    const interactionCountDisplay = document.getElementById("insertionInteractionCount");
    const sortingStepsLog = document.getElementById("insertionSortingStepsLog");

    resultDisplay.innerHTML = '';
    sortingStepsLog.innerHTML = '';
    sortingStepsLog.style.display = 'none';
    interactionCountDisplay.textContent = '0';

    if (!input.trim()) {
      resultDisplay.innerHTML = "Por favor, insira uma lista de números separados por vírgula.";
      return;
    }

    let numbersArray = input.split(",").map(Number);
    if (numbersArray.length === 1) {
      resultDisplay.innerHTML = "Apenas um número foi inserido. Ordenação não é necessária.";
      return;
    }

    let interactions = 0;
    for (let i = 1; i < numbersArray.length; i++) {
      let key = numbersArray[i];
      let j = i - 1;

      while (j >= 0 && numbersArray[j] > key) {
        numbersArray[j + 1] = numbersArray[j];
        j--;
        interactions++;
        
        sortingStepsLog.style.display = 'block';
        sortingStepsLog.innerHTML += `<div>${numbersArray.join(", ")}</div>`;
      }
      numbersArray[j + 1] = key;
    }

    resultDisplay.innerHTML = `Array ordenado: ${numbersArray.join(", ")}`;
    interactionCountDisplay.textContent = interactions;
  }

  // Função para Selection Sort
  function ordenarSelection() {
    const input = document.getElementById("selectionInput").value;
    const resultDisplay = document.getElementById("selectionSortedResult");
    const interactionCountDisplay = document.getElementById("selectionInteractionCount");
    const sortingStepsLog = document.getElementById("selectionSortingStepsLog");

    resultDisplay.innerHTML = '';
    sortingStepsLog.innerHTML = '';
    sortingStepsLog.style.display = 'none';
    interactionCountDisplay.textContent = '0';

    if (!input.trim()) {
      resultDisplay.innerHTML = "Por favor, insira uma lista de números separados por vírgula.";
      return;
    }

    let numbersArray = input.split(",").map(Number);
    if (numbersArray.length === 1) {
      resultDisplay.innerHTML = "Apenas um número foi inserido. Ordenação não é necessária.";
      return;
    }

    let interactions = 0;
    for (let i = 0; i < numbersArray.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < numbersArray.length; j++) {
        interactions++;
        if (numbersArray[j] < numbersArray[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [numbersArray[i], numbersArray[minIndex]] = [numbersArray[minIndex], numbersArray[i]];

        sortingStepsLog.style.display = 'block';
        sortingStepsLog.innerHTML += `<div>${numbersArray.join(", ")}</div>`;
      }
    }

    resultDisplay.innerHTML = `Array ordenado: ${numbersArray.join(", ")}`;
    interactionCountDisplay.textContent = interactions;
  }