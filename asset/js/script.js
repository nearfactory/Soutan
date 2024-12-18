const normalGain = [100, 100, 100];
const type1Gain = [10, 100, 100];
const type2Gain = [10, 100, 10];
const type3Gain = [100, 10, 10];

const colorNameList = [
  "background1",
  "background2",
  "background3",
  "background4",
  "background5",

  "headerBackground",
  
  "lineC",

  "accent1",
  "accent2",
  
  "text1",
  "text2",
  
  "colorModelSeparate",
  "colorModelCold",
  "colorModelWarm",
  "colorModel1",
  "colorModel2",
  "colorModel3",
  "colorModel4",
  "colorModel5",
  "colorModel6",
  "colorModel7",
  "colorModel8",
  "colorModel9",
  "colorModel10",

  "difficultyEx1B",
  "difficultyEx1",
  "difficultyEx2B",
  "difficultyEx2",
  "difficultyEx3B",
  "difficultyEx3",
  "difficultyEx4B",
  "difficultyEx4"
]
const colorList = [
  // 通常
  "#ffffff",
  "#fcfcfc",
  "#f8f8f8",
  "#f4f4f4",
  "#f0f0f0",

  "#f0f0f077",

  "#999999",

  "#107587",
  "#1EB3CD",

  "#222222",
  "#666666",

  "#aaaaaa",
  "#0F53A0",
  "#E78D1A",
  "#862C74",
  "#693D8C",
  "#145098",
  "#09628A",
  "#027884",
  "#13935A",
  "#A3B21B",
  "#E3AD15",
  "#DA5826",
  "#C23045",

  "#009539",
  "#D40018",
  "#F9C0D3",
  "#C8E7FB",
  "#027884",
  "#862C74",
  "#7D378B",
  "#0764AF"
]

$("#btnNormal").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorAdjustSet(normalGain, colorList[i]))
  }
});

$("#btnColor1").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorAdjustSet(type1Gain, colorList[i]))
  }
});

$("#btnColor2").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorAdjustSet(type2Gain, colorList[i]))
  }
});

$("#btnColor3").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorAdjustSet(type3Gain, colorList[i]))
  }
});

function colorAdjustSet(gainSet, inputVal){
  outputR = colorAdjust(gainSet[0], inputVal[1] + inputVal[2]);
  outputG = colorAdjust(gainSet[1], inputVal[3] + inputVal[4]);
  outputB = colorAdjust(gainSet[2], inputVal[5] + inputVal[6]);
  var output = "#" + outputR + outputG + outputB;
  // console.log(output);
  return (output);
}

function colorAdjust(gain, inputR){
  var outcome = String((Math.round((parseInt(inputR, 16))/100*gain)).toString(16));
  outcome = outcome.length < 2 ? "0"+outcome : outcome;
  return outcome;
}