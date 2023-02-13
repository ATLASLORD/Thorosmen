try
{
    function audioModdingTest()
    {
      var dir = '/pa/audio/voice/';

      //Selection
      api.audio.registerCueMod('/VO/Computer/gw/board_commander_discovered', dir + 'lawnmower_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_commander_factionleader_discovered', dir + 'hindenburg_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_exploring', dir + 'kamecha_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Foundation', dir + 'spider_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Legonis', dir + 'toblerone_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Revenenants', dir + 'sauron_detected.ogg')

    }
    _.defer(audioModdingTest);
}
catch (e)
{
  console.error(e);
}