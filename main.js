function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('Dragonite') 
    img1 = document.getElementById('Garchomp')
    img2 = document.getElementById('Reshiram')
    img3 = document.getElementById('Rayquaza')

    if (results[0].label == "Clap") {
      img.src = 'dragonite.gif';
      img1.src = '4f11e06c20db156812338a83af904be4.png';
      img2.src = 'Reshiram_v_2_by_xous54-d35s3gb.jpeg';
      img3.src = '10384-Shiny-Mega-Rayquaza.jpg';
    } else if (results[0].label == "Bell") {
      img.src = 'dragonite_dragon_claw_by_izzarchron_d7yun57-fullview.png';
      img1.src = 'garchomp.gif';
      img2.src = 'Reshiram_v_2_by_xous54-d35s3gb.jpeg';
      img3.src = '10384-Shiny-Mega-Rayquaza.jpg';
    } else if (results[0].label == "Snapping") {
      img.src = 'dragonite_dragon_claw_by_izzarchron_d7yun57-fullview.png';
      img1.src = '4f11e06c20db156812338a83af904be4.png';
      img2.src = 'reshiram.gif';
      img3.src = '10384-Shiny-Mega-Rayquaza.jpg';
    }else{
      img.src = 'dragonite_dragon_claw_by_izzarchron_d7yun57-fullview.png';
      img1.src = '4f11e06c20db156812338a83af904be4.png';
      img2.src = 'Reshiram_v_2_by_xous54-d35s3gb.jpeg';
      img3.src = 'rayquaza.gif';
    }
  }
}