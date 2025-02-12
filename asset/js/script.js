

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
];
const colorList0 = [
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
];
const colorList1 = [
  // 通常
  "#ffffff",
  "#fcfcfc",
  "#f8f8f8",
  "#f4f4f4",
  "#f0f0f0",

  "#f0f0f077",

  "#999999",

  "rgb(93, 101, 134)",
  "rgb(143, 155, 203)",

  "#222222",
  "#666666",

  "#aaaaaa",
  "rgb(54, 75, 159)",
  "rgb(181, 150, 26)",
  "#303d75",
  "#36478c",
  "#354997",
  "#485589",
  "#5d6582",
  "#847b58",
  "#cca91a",
  "#d5af14",
  "#7b6b26",
  "#494846",

  "rgb(136, 120, 55)",
  "rgb(38, 35, 26)",
  "rgb(199, 202, 211)",
  "rgb(220, 227, 250)",
  "rgb(93, 101, 130)",
  "rgb(48, 61, 117)",
  "rgb(52, 70, 139)",
  "rgb(66, 88, 174)"
];
const colorList2 = [
  // 通常
  "#ffffff",
  "#fcfcfc",
  "#f8f8f8",
  "#f4f4f4",
  "#f0f0f0",

  "#f0f0f077",

  "#999999",

  "rgb(70, 84, 137)",
  "rgb(110, 131, 208)",

  "#222222",
  "#666666",

  "#aaaaaa",
  "rgb(42, 66, 161)",
  "rgb(196, 161, 24)",
  "rgb(72, 80, 113)",
  "rgb(68, 82, 138)",
  "rgb(43, 66, 153)",
  "rgb(53, 71, 139)",
  "rgb(67, 81, 134)",
  "rgb(100, 98, 93)",
  "rgb(193, 159, 27)",
  "rgb(218, 177, 20)",
  "rgb(151, 127, 35)",
  "rgb(107, 99, 65)",

  "rgb(98, 90, 60)",
  "rgb(87, 73, 18)",
  "rgb(213, 212, 209)",
  "rgb(214, 222, 251)",
  "rgb(67, 81, 134)",
  "rgb(72, 80, 113)",
  "rgb(72, 86, 136)",
  "rgb(48, 75, 176)"
];
const colorList3 = [
  // 通常
  "#ffffff",
  "#fcfcfc",
  "#f8f8f8",
  "#f4f4f4",
  "#f0f0f0",

  "#f0f0f077",

  "#999999",

  "rgb(17, 117, 126)",
  "rgb(31, 179, 193)",

  "#222222",
  "#666666",

  "#aaaaaa",
  "rgb(10, 93, 101)",
  "rgb(238, 124, 114)",
  "rgb(125, 57, 51)",
  "rgb(97, 74, 72)",
  "rgb(15, 90, 96)",
  "rgb(8, 102, 110)",
  "rgb(4, 119, 129)",
  "rgb(27, 135, 144)",
  "rgb(176, 153, 151)",
  "rgb(238, 149, 141)",
  "rgb(218, 82, 70)",
  "rgb(188, 54, 42)",

  "rgb(11, 131, 141)",
  "rgb(204, 8, 0)",
  "rgb(245, 196, 191)",
  "rgb(199, 233, 236)",
  "rgb(4, 119, 129)",
  "rgb(125, 57, 51)",
  "rgb(115, 69, 65)",
  "rgb(3, 109, 119)"
];


$("#btnNormal").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorList0[i])
  }
});

$("#btnColor1").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorList1[i])
  }
});

$("#btnColor2").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorList2[i])
  }
});

$("#btnColor3").click(function(){
  for(var i=0; i<colorNameList.length; i++){
    document.querySelector(":root").style.setProperty("--" + colorNameList[i], colorList3[i])
  }
});