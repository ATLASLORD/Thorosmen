
model.selectionAudioMap = {}

//load the selection list
$.getJSON("coui://ui/mods/loloares.thorosmen/live_game/selection_list.json").then(function(data){
	//console.log(data)
    model.selectionAudioMap = data;

})
// api.audio.playSoundFromFile(filename);

var gracePeriod = {};//if another sound of the same type is triggered in the grace period it will not play them

var playAudioSequence = function(audioList){

    audioList = _.uniq(audioList).sort();//removes dupes and makes sure sounds appear in the same order for the most part
    
    var delay = 300;//milliseconds
    var totalDelay = 0;
    for(var i = 0; i< audioList.length;i++){
        var audioGrace = gracePeriod[audioList[i]];
        var currentTime = Date.now();
        if(audioGrace == undefined){gracePeriod[audioList[i]] =currentTime}
        else if(currentTime - audioGrace < 400){continue}
        _.delay(api.audio.playSoundFromFile,totalDelay,audioList[i])
        console.log(audioGrace)
        console.log(currentTime - audioGrace)
        console.log(audioList[i]);
        console.log(totalDelay);
        gracePeriod[audioList[i]] = currentTime;
        totalDelay += delay;
    } 
    selectionResetSinceLastPlay = false;
}

//selection wrapper, taken from scenarios
var selectionResetSinceLastPlay = true;//used to stop it playing audio without a new selection
var previousSpecCount = 0;
var previousSelection = undefined;
var selectionSoundChecker = ko.computed(function(){
    
    var needAudioPlayback = _.keys(model.selectionAudioMap);
    var soundsToPlay = [];
    var selection = model.selection();
    if(selection === undefined){return}
    if(selection === null){selectionResetSinceLastPlay = true;previousSpecCount = 0; return}
    var selectionId = selection.spec_ids;
    var unitTypeNumber = _.keys(model.selection().spec_ids).length;
    if(unitTypeNumber > previousSpecCount){selectionResetSinceLastPlay = true; previousSpecCount = unitTypeNumber}
   
    if(selectionResetSinceLastPlay == false){return}
    for(var i = 0;i<needAudioPlayback.length;i++){
  
      if(selectionId[needAudioPlayback[i]] !== undefined){
  
            soundsToPlay.push(model.selectionAudioMap[needAudioPlayback[i]][0])//currently only plays the first sound listed in selection list
  
      }
  
    }
    previousSelection = selection;
    
    playAudioSequence(soundsToPlay);
  
  
  })

