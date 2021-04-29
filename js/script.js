function verify(){
  day = document.getElementById("day").value
  month = document.getElementById("month").value

  if(month <= 0 || month >=13){
    alert("informe o mês de 1 a 12")
  }
  if(day <=0 || day >=32){
    alert("Informe o day de 1 a 31")
  }
}

function discover(){
  day = document.getElementById("day").value
  month = document.getElementById("month").value
  img = document.getElementById("sign-image")
  sign = document.getElementById("sign-name")

  if((month == 1 && day < 21) || (month == 12 && day >= 22)) {
      img.src="img/capricornio.png"
      sign.innerHTML = "<h1>Capricórnio</h1>"
      opacitySwitcher()
  }
  if((month == 2 && day < 20) || (month == 1 && day >= 21)){
      img.src="img/aquario.png"
      sign.innerHTML="<h1>Aquário</h1>"
      opacitySwitcher()
  }
  if((month == 3 && day < 21) || (month == 2 && day >= 20)){
      img.src="img/peixes.png"
      sign.innerHTML="<h1>Peixes</h1>"
      opacitySwitcher()
  }
  if((month == 4 && day < 21) || (month == 3 && day >= 21)){
      img.src="img/aries.png"
      sign.innerHTML="<h1>Áries</h1>"
      opacitySwitcher()
  }
  if((month == 5 && day < 21) || (month == 4 && day >= 21)){
      img.src="img/touro.png"
      sign.innerHTML="<h1>Touro</h1>"
      opacitySwitcher()
  }
  if((month == 6 && day < 21) || (month == 5 && day >= 21)){
      img.src="img/gemeos.png"
      sign.innerHTML="<h1>Gêmeos</h1>"
      opacitySwitcher()
  }
  if((month == 7 && day < 22) || (month == 6 && day >= 21)){
      img.src="img/cancer.png"
      sign.innerHTML = "<h1>Câncer</h1>"
      opacitySwitcher()
  }
  if((month == 8 && day < 23) || (month == 7 && day >= 22)){
      img.src="img/leao.png"
      sign.innerHTML="<h1>Leão</h1>"
      opacitySwitcher()
  }
  if((month == 9 && day < 23) || (month == 8 && day >= 23)){
      img.src="img/virgem.png"
      sign.innerHTML="<h1>Virgem</h1>"
      opacitySwitcher()
  }
  if((month == 10 && day < 23) || (month == 9 && day >= 23)){
      img.src="img/libra.png"
      sign.innerHTML="<h1>Libra</h1>"
      opacitySwitcher()
  }
  if((month == 11 && day < 22) || (month == 10 && day >= 23)){
      img.src="img/escorpiao.png"
      sign.innerHTML="<h1>Escorpião</h1>"
      opacitySwitcher()
  }
  if((month == 12 && day < 22) || (month == 11 && day >= 22)){
      img.src="img/sagitario.png"
      sign.innerHTML="<h1>Sagitário</h1>"
      opacitySwitcher()
  }
}