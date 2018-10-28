import {toCamelCase, toFunctionName, toFileName} from './stringFunctions'
import {sum} from './arrayFunctions'
import {abilityMap,triggerMap} from './abilities.js'
import {game , board, cardData, posAvail} from './index.js'


function addToFunction( someFunction , callback){
  someFunction = (function(){
    let _someFunction = someFunction;
    return function() {
      callback();
      _someFunction.apply(this);
    };
  })();
  return someFunction;
}

let draggedCard;

const blank = (parrent, side) => {
  let div = document.createElement('div')
  div.classList.add("blank")
  if (parrent != null){
    side ? parrent.appendChild(div) : parrent.insertBefore(div, parrent.firstChild);
  }
  return {div}
}

const card = (cardProto , player) => {
  let assetPath = "../node_modules/artifactdb/assets"
  let div = document.createElement('div')
  let updateDisplay = () => {};
  let endOfRound = () => {};
  let continuousRefresh = () => {};
  let properties = {div, player};

  div.classList.add("card" , cardProto.Color)
  // div.draggable = true;
  let imageFileName = toFileName(cardProto.Name) // .replace(/\s/g,"_").replace("\'","").toLowerCase()
  let artwork = document.createElement('IMG'); artwork.draggable = false;
  artwork.src = `${assetPath}/artwork/large/${imageFileName}.jpg`
  div.appendChild(artwork)

  if (cardProto.CardType == "Hero"){
    properties.respawn = 0;
    properties.Bounty = 5;
  }
  if (cardProto.CardType == "Creep"){
    properties.Bounty = 1;
  }

  if (cardProto.CardType == "Creep" || cardProto.CardType == "Hero" ){
    properties.arrow = 0;
    let directions = ["left", "middle", "right"]
    let arrowDiv = document.createElement('div');
    arrowDiv.classList.add("arrow", directions[1 + properties.arrow])
    div.appendChild(arrowDiv);
    updateDisplay = addToFunction(updateDisplay , function(){
      arrowDiv.classList.remove("left", "middle", "right")
      arrowDiv.classList.add("arrow", directions[1 + cardProto.arrow])
    })
  }
  if (cardProto.Health != null){
    properties.currentHealth = [cardProto.Health,0,0,0,0];
    let healthContainer = document.createElement('div')
    healthContainer.classList.add("icon-container","health")
    let healthIcon = document.createElement('IMG'); healthIcon.draggable = false;
    healthIcon.src = `${assetPath}/icon/cardstat-health.png`
    let healthNumber = document.createElement('div')
    healthNumber.textContent = sum(properties.currentHealth);
    healthContainer.appendChild(healthIcon)
    healthContainer.appendChild(healthNumber)
    div.appendChild(healthContainer)
    updateDisplay = addToFunction(updateDisplay , function(){healthNumber.textContent = sum(cardProto.currentHealth);})
    endOfRound = addToFunction(endOfRound , function(){cardProto.currentHealth[3] = 0 })
    continuousRefresh = addToFunction(continuousRefresh , function(){cardProto.currentHealth[4] = 0 })
  }
  if (cardProto.Attack != null){
    properties.currentAttack = [cardProto.Attack,0,0,0,0]
    let attackContainer = document.createElement('div')
    attackContainer.classList.add("icon-container","attack")
    let attackIcon = document.createElement('IMG'); attackIcon.draggable = false;
    attackIcon.src = `${assetPath}/icon/cardstat-attack.png`
    let attackNumber = document.createElement('div')
    attackNumber.textContent = cardProto.Attack;
    attackContainer.appendChild(attackIcon)
    attackContainer.appendChild(attackNumber)
    div.appendChild(attackContainer)
    updateDisplay = addToFunction(updateDisplay , function(){attackNumber.textContent = sum(cardProto.currentAttack);})
    endOfRound = addToFunction(endOfRound , function(){cardProto.currentAttack[3] = 0 })
    continuousRefresh = addToFunction(continuousRefresh , function(){cardProto.currentAttack[4] = 0 })

  }
  if (cardProto.Armor != null){
    properties.currentArmor = [cardProto.Armor,0,0,0,0]
    let armorContainer = document.createElement('div')
    armorContainer.classList.add("icon-container","armor")
    let armorIcon = document.createElement('IMG'); armorIcon.draggable = false;
    armorIcon.src = `${assetPath}/icon/cardstat-armor.png`
    let armorNumber = document.createElement('div')
    armorNumber.textContent = cardProto.Armor;
    armorContainer.appendChild(armorIcon)
    armorContainer.appendChild(armorNumber)
    div.appendChild(armorContainer)
    updateDisplay = addToFunction(updateDisplay , function(){armorNumber.textContent = sum(cardProto.currentArmor);})
    endOfRound = addToFunction(endOfRound , function(){cardProto.currentArmor[3] = 0 })
    continuousRefresh = addToFunction(continuousRefresh , function(){cardProto.currentArmor[4] = 0 })
  }
  if (cardProto.Abilities != null){
    let abilitiesContainer = document.createElement('div');
    abilitiesContainer.classList.add("abilities-container")
    cardProto.Abilities.forEach(function(ability){
      ability.div = document.createElement('div')
      ability.div .classList.add("ability-container")
      let abilityIcon = document.createElement('IMG'); abilityIcon.draggable = false;
      let abilityFileName = toFileName(ability.Name) //.replace(/\s/g,"_").replace("\'","").toLowerCase()
      abilityIcon.src = `${assetPath}/ability/${abilityFileName}.jpg`
      abilityIcon.title = ability.Text
      ability.div.appendChild(abilityIcon)
      abilitiesContainer.appendChild(ability.div)
      if (ability.Type == "Active"){
        ability.div.addEventListener("click", function(e){abilityMap.get(ability.Name)(cardProto,e)})
      }else{
        div.addEventListener(triggerMap.get(ability.Name), function(e){abilityMap.get(ability.Name)(cardProto,e)})
       }
    })
    div.appendChild(abilitiesContainer)
  }

  div.addEventListener("click",function(){console.log(cardProto)})
  div.ondragstart = function(ev){
    draggedCard = cardProto
    ev.dataTransfer.setData("text/plain", " ")
  };

  div.addEventListener("endOfRound", endOfRound)
  div.addEventListener("continuousRefresh", continuousRefresh)

  properties.updateDisplay = updateDisplay
  cardProto = Object.assign({},cardProto, properties)

  return cardProto
}

export { card , blank, draggedCard}
