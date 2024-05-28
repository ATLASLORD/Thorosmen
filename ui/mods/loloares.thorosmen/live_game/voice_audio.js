try
{
    function audioModdingTest()
    {
      var dir = '/pa/audio/voice/';

      //Selection
      api.audio.registerCueMod('/VO/Computer/gw/board_commander_discovered', dir + 'enemy_lawnmower_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_commander_factionleader_discovered', dir + 'enemy_spider_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_exploring', dir + 'enemy_toblerone_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Foundation', dir + 'enemy_hindenburg_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Legonis', dir + 'enemy_kamecha_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Revenenants', dir + 'enemy_pap_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_faction_discovered_Synchronous', dir + 'enemy_fef_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_initiating_battle', dir + 'enemy_ilegal_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_titan_ares', dir + 'enemy_tripod_detected.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_slot_increased', dir + 'enemy_lawnmower_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_system_capture', dir + 'enemy_spider_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_system_found', dir + 'enemy_toblerone_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_system_neutral', dir + 'enemy_hindenburg_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_acquired', dir + 'enemy_kamecha_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_acquired_rare', dir + 'enemy_pap_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_start_online', dir + 'enemy_fef_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_super_weapon', dir + 'enemy_ilegal_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_titan_atlas', dir + 'enemy_tripod_destroyed.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_vehicle', dir + 'lawnmower_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_weapon_upgrade', dir + 'spider_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_select', dir + 'toblerone_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_speed', dir + 'hindenburg_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_subcommander', dir + 'kamecha_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_economy', dir + 'pap_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_efficiency', dir + 'fef_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_land', dir + 'ilegal_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_available_titan_zeus', dir + 'tripod_lost.ogg');
      api.audio.registerCueMod('/VO/Computer/gw/board_tech_dismissed', dir + 'tripod_ascend.ogg')

    }
    _.defer(audioModdingTest);
}
catch (e)
{
  console.error(e);
}