let unitList=[];
let armyName='';

// Get references to the input and preview elements
let themeToggleOpen = true;
let logoToggleOpen = true;

function initialise(){
  document.getElementById("themeToggle").addEventListener('click', function() {themeToggle();});
  document.getElementById("logoToggle").addEventListener('click', function() {logoToggle();});

  document.getElementById("redSlider1").addEventListener("input", function(){ updateColour(1)});
  document.getElementById("greenSlider1").addEventListener("input", function(){ updateColour(1)});
  document.getElementById("blueSlider1").addEventListener("input", function(){ updateColour(1)});

  document.getElementById("redSlider2").addEventListener("input", function(){ updateColour(2)});
  document.getElementById("greenSlider2").addEventListener("input", function(){ updateColour(2)});
  document.getElementById("blueSlider2").addEventListener("input", function(){ updateColour(2)});

  document.getElementById("redSlider3").addEventListener("input", function(){ updateColour(3)});
  document.getElementById("greenSlider3").addEventListener("input", function(){ updateColour(3)});
  document.getElementById("blueSlider3").addEventListener("input", function(){ updateColour(3)});

  
  document.getElementById("predefinedTheme").addEventListener("change", function(){
    updateColour(1);
  });

  // Initial update
  updateColour(1);
  updateColour(2);
  updateColour(3);


  document.getElementById('customLogo').addEventListener('change', function(event) {updateLogo(event)});
  document.getElementById('predefinedLogo').addEventListener('change', function(event) {updateLogo(event)});
  
  document.getElementById("loadButton").addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        loadArmy(file);
    } else {
        alert('Please select a file.');
    }
  });
  document.getElementById("generateButton").addEventListener('click', function() {
    generateCards();
  });


}
initialise(); //groups all listener functions and setup together

function themeToggle(){
  if (themeToggleOpen) {
    document.getElementById("themeToggle1").style.opacity = 0.4;
    document.getElementById("predefinedTheme").style.opacity=0.4;
    document.getElementById("predefinedTheme").disabled=true;
    document.getElementById("themeToggle2").style.opacity = 1;
    document.getElementById("customTheme").style.opacity = 1;
    themeToggleOpen = false;
  } else {
    document.getElementById("themeToggle1").style.opacity = 1;
    document.getElementById("predefinedTheme").style.opacity=1;
    document.getElementById("predefinedTheme").disabled=false;
    document.getElementById("themeToggle2").style.opacity = 0.4;
    document.getElementById("customTheme").style.opacity = 0.4;
    themeToggleOpen = true;
  }
  updateColour(1);
  updateColour(2);
  updateColour(3);
}
function getTheme(currentArmy) {
  var theme = {};
  switch (currentArmy) {
    case "space_marines":
      theme.colour1 = "#4040A0";
      theme.colour2 = "#70B0FF";
      theme.colour3 = "#807020";
      theme.imageURL = "url('./img/space_marine.png')";
      theme.logoURL = "url('./img/space_marine_logo.png')";
      break;
    case "space_wolves":
      theme.colour1 = "#507595";
      theme.colour2 = "#90B0D0";
      theme.colour3 = "#D0A010";
      theme.imageURL = "url('./img/space_wolves.png')";
      theme.logoURL= "url('./img/space_wolves_logo.png')";
      break;
    case "black_templars":
      theme.colour1 = "#000000";
      theme.colour2 = "#909090";
      theme.colour3 = "#FFFFFF";
      theme.imageURL = "url('./img/black_templars.png')";
      theme.logoURL= "url('./img/black_templars_logo.png')";
      break;
    case "blood_angels":
      theme.colour1 = "#701010";
      theme.colour2 = "#A0A0A0";
      theme.colour3 = "#000000";
      theme.imageURL = "url('./img/blood_angels.png')";
      theme.logoURL= "url('./img/blood_angels_logo.png')";
      break;
    case "dark_angels":
      theme.colour1 = "#203030";
      theme.colour2 = "#A0A090";
      theme.colour3 = "#807020";
      theme.imageURL = "url('./img/dark_angels.png')";
      theme.logoURL= "url('./img/dark_angels_logo.png')";
      break;
    case "deathwatch":
      theme.colour1 = "#000000";
      theme.colour2 = "#909090";
      theme.colour3 = "#701010";
      theme.imageURL = "url('./img/deathwatch.png')";
      theme.logoURL= "url('./img/deathwatch_logo.png')";
      break;
    // case "ad_sisters":
    //   break;
    // case "ad_custodes":
    //   break;
    // case "ad_mechanicus":
    //   break;
    // case "imp_agents":
    //   break;
    // case "imp_guard":
    //   break;
    // case "grey_knights":
    //   break;
    case "imp_knights":
      theme.colour1 = "#3060A5";
      theme.colour2 = "#70A5B5";
      theme.colour3 = "#909030";
      // theme.imageURL = "url('./img/.png')";
      theme.logoURL= "url('./img/imp_knights_logo.png')";
      break;
    case "chaos_daemons":
      theme.colour1 = "#701550";
      theme.colour2 = "#80E0F0";
      theme.colour3 = "#250555";
      // theme.imageURL = "url('./img/.png')";
      theme.logoURL= "url('./img/chaos_daemons_logo.png')";
      break;
    case "chaos_knights":
      theme.colour1 = "#205035";
      theme.colour2 = "#709070";
      theme.colour3 = "#102010";
      // theme.imageURL = "url('./img/.png')";
      theme.logoURL= "url('./img/chaos_knights_logo.png')";
      break;
    case "chaos_space_marines":
      theme.colour1 = "#902020";
      theme.colour2 = "#604040";
      theme.colour3 = "#201010";
      // theme.imageURL = "url('./img/.png')";
      theme.logoURL= "url('./img/chaos_space_marines_logo.png')";
      break;
    case "death_guard":
      theme.colour1 = "#80B030";
      theme.colour2 = "#D0E070";
      theme.colour3 = "#204010";
      // theme.imageURL = "url('./img/.png')";
      theme.logoURL= "url('./img/death_guard_logo.png')";
      break;
    case "thousand_sons":
      theme.colour1 = "#B030C5";
      theme.colour2 = "#50E0F0";
      theme.colour3 = "#F0F0F0";
      // theme.imageURL = "url('./img/.png')";
      theme.logoURL= "url('./img/thousand_sons_logo.png')";
      break;
    // case "world_eaters":
    //   break;
    // case "aeldari":
    //   break;
    // case "drukhari":
    //   break;
    // case "genestealer_cults":
    //   break;
    // case "leagues_of_votann":
    //   break;
    case "necrons":
      theme.colour1 = "#404040";
      theme.colour2 = "#B0B0B0";
      theme.colour3 = "#55C555";
      theme.imageURL = "url('./img/necrons.jpg')";
      theme.logoURL= "url('./img/necron_logo.png')";
      break;
    case "orkz":
      theme.colour1 = "#40A040";
      theme.colour2 = "#A0C5A0";
      theme.colour3 = "#308030";
      theme.imageURL = "url('./img/orkz.jpg')";
      theme.logoURL= "url('./img/orkz_logo.png')";
      break;
    case "tau":
      theme.colour1 = "#30A0D0";
      theme.colour2 = "#A0D0E0";
      theme.colour3 = "#D5D5D5";
      theme.imageURL = "url('./img/tau.jpg')";
      theme.logoURL= "url('./img/tau_logo.png')";
      break;
    case "tyranids":
      theme.colour1 = "#504090";
      theme.colour2 = "#A0A0D0";
      theme.colour3 = "#B0B0A0";
      theme.imageURL = "url('./img/tyranids.jpg')";
      theme.logoURL= "url('./img/tyranids_logo.png')";
      break;
    default:
      theme.colour1 = "#405080";
      theme.colour2 = "#90B0D0";
      theme.colour3 = "#C5C090";
      theme.imageURL = "url('./img/orkz.jpg')";
      theme.logoURL= "url('./img/orkz_logo.png')";
      break;
  }
  return theme;
}
function updateColour(x){
  if(document.getElementById("predefinedTheme").disabled == false){ //use predefined theme
    var selectElement = document.getElementById("predefinedTheme");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    const theme = getTheme(selectedOption.value);
    document.documentElement.style.setProperty('--theme_colour1', theme.colour1);
    document.documentElement.style.setProperty('--theme_colour2', theme.colour2);
    document.documentElement.style.setProperty('--theme_colour3', theme.colour3);
  }
  else{
    const redValue = document.getElementById("redSlider"+x).value;
    const greenValue = document.getElementById("greenSlider"+x).value;
    const blueValue = document.getElementById("blueSlider"+x).value;
    const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    const invColor = `rgb(${255-redValue}, ${255-greenValue}, ${255-blueValue})`;
    document.getElementById("color"+x+"-box").style.backgroundColor = color;
    document.getElementById("color"+x+"-box").style.color = invColor;
    document.getElementById("color"+x+"-box").innerHTML = color;
    document.documentElement.style.setProperty('--theme_colour'+x, color);
  }
}
function logoToggle(){
  if (logoToggleOpen) {
    document.getElementById("logoToggle1").style.opacity = 0.4;
    document.getElementById("predefinedLogo").style.opacity=0.4;
    document.getElementById("predefinedLogo").disabled=true;
    document.getElementById("logoToggle2").style.opacity = 1;
    document.getElementById("customLogo").style.opacity = 1;
    document.getElementById("customLogo").disabled=false;
    logoToggleOpen = false;
  } else {
    document.getElementById("logoToggle1").style.opacity = 1;
    document.getElementById("predefinedLogo").style.opacity=1;
    document.getElementById("predefinedLogo").disabled=false;
    document.getElementById("logoToggle2").style.opacity = 0.4;
    document.getElementById("customLogo").style.opacity = 0.4;
    document.getElementById("customLogo").disabled=true;
    logoToggleOpen = true;
  }
}
function updateLogo(event) {
  var selectElement = document.getElementById("predefinedLogo");

  if (selectElement.disabled == false) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    const theme = getTheme(selectedOption.value);
    document.documentElement.style.setProperty('--logoURL', theme.logoURL);
  }
  else {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const dataURL = event.target.result;
            document.documentElement.style.setProperty('--logoURL', 'url(' + dataURL + ')');
        };
        reader.readAsDataURL(file);
    } else {
        console.error('No file selected.');
    }
  }
}

//battlescribe loads
function loadArmy(file) {
  const reader = new FileReader();
  reader.onload = function(event) {
      const htmlContent = event.target.result;
      document.getElementById('loadStatus').innerHTML = "Loading...";
      armyName='';
      unitList = [];
      const battlescribe_out = $(htmlContent);
      armyName = battlescribe_out.find('h1').eq(0).html();
      battlescribe_out.find('.force').each(function() {
          const faction_data = $(this).find("ul");
          faction_data.children().each(function() {
              const categoryNode = $(this);
              if (categoryNode.hasClass('category')) {
                  const categoryName = categoryNode.find('h3').html();
                  const categoryList = categoryNode.find('ul').children();
                  if (categoryName != "Configuration") {
                      categoryList.each(function() {
                          const currUnit = $(this);
                          if (currUnit.hasClass('rootselection')) {
                              parseUnit(currUnit);
                          }
                      });
                  }
              }
          });
      });
      document.getElementById('loadStatus').innerHTML = "Load Successful";
      document.getElementById("generateButton").disabled = false;
  };
  reader.readAsText(file);
}
function parseUnit(unitHTML){
  // Parse unit data here and save it to unitList
  const unitData = {
    name: unitHTML.find('h4').html(),
    loadout: '',
    keywords: unitHTML.find('p.category-names').html(),
    rules: unitHTML.find('p.rule-names').html(),
    abilities: unitHTML.find('p.profile-names').html(),
    abilityDesc:[],
    meleeWeapons: [],
    rangedWeapons: [],
    unitStats: [],
    unitModels:[]
  };
  const firstParagraph = unitHTML.find('p').eq(0);
  if (firstParagraph && !firstParagraph.attr('class')) {
    unitData.loadout = firstParagraph.html();
  }
  /* let index_stats = 3; //this is the defaulkt stats table index but for transports it is changed to 4 */


  const modelList = unitHTML.find('ul').eq(0);
  if(modelList){
    modelList.children().each(function() {
      const currModel = $(this);
      unitData.unitModels.push(currModel.find('h4').eq(0).html());
      });
  }
  console.log("test");
  unitHTML.find('table').each(function(){
	 const tableName =  $(this).find('tr').eq(0).find('th').eq(0).html()
	 
	 $(this).find('tr:gt(0)').each(function(){
		const row = $(this).find('td');
		if(tableName =="Abilities" || tableName == "Transport"){
			const ability = {
				name: row .eq(0).html(),
				desc: row .eq(1).html()
			};
			unitData.abilityDesc.push(ability);
		}
		else if(tableName =="Melee Weapons"){
			const meleeWeapon = {
				name: row.eq(0).html(),
				range: row.eq(1).html(),
				attacks: row.eq(2).html(),
				WS: row.eq(3).html(),
				strength: row.eq(4).html(),
				AP: row.eq(5).html(),
				damage: row.eq(6).html(),
				keywords: row.eq(7).html()
			};
			unitData.meleeWeapons.push(meleeWeapon);
		}
		else if(tableName =="Ranged Weapons"){
			const rangedWeapon = {
				name: row.eq(0).html(),
				range: row.eq(1).html(),
				attacks: row.eq(2).html(),
				BS: row.eq(3).html(),
				strength: row.eq(4).html(),
				AP: row.eq(5).html(),
				damage: row.eq(6).html(),
				keywords: row.eq(7).html()
			};
			unitData.rangedWeapons.push(rangedWeapon);
			
		}
		else if(tableName =="Unit"){
			const unitStat = {
			  name: row.eq(0).html(),
			  move: row.eq(1).html(),
			  toughness: row.eq(2).html(),
			  save: row.eq(3).html(),
			  wounds: row.eq(4).html(),
			  leadership: row.eq(5).html(),
			  OC: row.eq(6).html()
			};
			unitData.unitStats.push(unitStat);
		}
	 });
	 
  });
  unitList.push(unitData);
}

//handlebars template edition
function generateCards(){
  // Iterate over unitList and generate HTML for each unit card
  
  var unitCardsHTML = '';
  var finalHTML='';
  var tmp_unitStats=[];
  tmp_unitStats.push({armyName:armyName})
  // Iterate over unitList and generate unit cards
  for(let i=0; i<unitList.length; i++){
    tmp_unitStats.push({ unitName: unitList[i].name,unitLength:unitList[i].unitStats.length, unitStats: unitList[i].unitStats });
    unitCardsHTML += generateUnitCard(unitList[i]);
  }
  if(document.getElementById("armySummaryCheckBox").checked){
    finalHTML+=generateArmySummary(tmp_unitStats);
  }
  finalHTML+=unitCardsHTML;
  // Append the HTML to a container
  document.getElementById("cards-container").innerHTML = finalHTML;
  document.getElementById('setup_div').style.display="none";
}
function generateUnitCard(unit){
  // Get the Handlebars template
  var source = document.getElementById("unit-card-template").innerHTML;

  // Compile the template
  var template = Handlebars.compile(source);
  
  // Generate unit card HTML here
  var html = template(unit);
  return html;
}
function generateArmySummary(armyStats){
  // Get the Handlebars template
  var source = document.getElementById("army-summary-card-template").innerHTML;

  // Compile the template
  var template = Handlebars.compile(source);

  // Generate unit card HTML here
  var html = template(armyStats.flat());
  return html;
}



document.addEventListener('click', function(event) {
    var targetElement = event.target;

    // Check if the clicked element or its ancestors have the contenteditable attribute set to true
    var isEditable = targetElement.closest('[contenteditable="true"]');
    if (!isEditable && !targetElement.closest('.format-options')) {
        document.getElementById('formatOptions').style.display = 'none';
    }
});
	
function showFormattingOptions() {
	var formatOptions = document.getElementById('formatOptions');
	var selection = window.getSelection();

	if (selection.toString().length > 0) {
		formatOptions.style.display = 'block';
		formatOptions.style.top = (selection.getRangeAt(0).getBoundingClientRect().bottom) + 'px';
		formatOptions.style.left = selection.getRangeAt(0).getBoundingClientRect().left + 'px';
	} else {
		formatOptions.style.display = 'none';
	}
}

function increaseFontSize() {
	document.execCommand('fontSize', false, '4');
}

function decreaseFontSize() {
	document.execCommand('fontSize', false, '2');
}
