function calcular_media() {
    var txtnota = document.getElementById('txtprova');
    var txtava = document.getElementById('txtava');
    var txtpim = document.getElementById('txtpim');
    var res = document.getElementById('res');
    var res1 = document.getElementById('res1');
  
    if (txtnota.value === '' || txtava.value === '' || txtpim.value === '') {
      res.innerHTML = '[ERRO] Preencha o campo vazio!';
      res1.innerHTML = '';
    } else {
      var txtnotaValue = parseFloat(txtnota.value); // Converter o valor para número usando parseFloat
      var txtavaValue = parseFloat(txtava.value); // Converter o valor para número usando parseFloat
      var txtpimValue = parseFloat(txtpim.value); // Converter o valor para número usando parseFloat
  
      var i = (7 * txtnotaValue + 2 * txtpimValue + 1 * txtavaValue) / 10;
      res.innerHTML = `A sua média é ${i.toFixed(2)}`;
  
      if (i >= 6) {
        res1.innerHTML = 'Parabéns, você está APROVADO!';
      } else {
        res1.innerHTML = '';
      }
    }
  }
  

function mediafinal() {
    var ms = document.getElementById('txtms');
    var exame = document.getElementById('txtexame');
    var res2 = document.getElementById('res2');
  
    if (ms.value === '' || exame.value === '') {
      res2.innerHTML = '[ERRO] Preencha o campo vazio!';
    } else {
      var msValue = parseFloat(ms.value); // Converter o valor para número usando parseFloat
      var exameValue = parseFloat(exame.value); // Converter o valor para número usando parseFloat
  
      var media_final = (msValue + exameValue) / 2;
      res2.innerHTML = `Sua Média final é ${media_final.toFixed(2)}`; // Arredondar o resultado para 2 casas decimais
    }
  }
  