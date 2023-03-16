var newBuild = {

    "/pa/units/land/bot_white_hole/bot_white_hole.json": ["Asemititan", 0, { row: 2, column: 0 }],
    "/pa/units/land/crusher/crusher.json": ["Asemititan", 0, { row: 2, column: 1 }],
    "/pa/units/land/ilegal/ilegal.json": ["Asemititan", 0, { row: 1, column: 2 }],
    "/pa/units/land/ggspider_build/ggspider_build.json": ["Asemititan", 0, { row: 0, column: 1 }],
    "/pa/units/land/bot_anti_nuke/bot_anti_nuke.json": ["Asemititan", 0, { row: 0, column: 0 }],
    "/pa/units/air/airship/airship.json": ["Asemititan", 0, { row: 0, column: 2 }],
    "/pa/units/land/pap/pap.json": ["Asemititan", 0, { row: 1, column: 0 }],
    "/pa/units/land/fef/fef.json": ["Asemititan", 0, { row: 1, column: 1 }],

    "/pa/units/land/metal_destructor/metal_destructor.json": ["structure", 0, { row: 1, column: 0 }],
    "/pa/units/land/radar_titan/radar_titan.json": ["structure", 0, { row: 0, column: 0 }],

    "/pa/units/land/tank_drone/tank_drone/tank_drone.json": ["vehicle", 0, { row: 0, column: 3 }],
    "/pa/units/land/tank_decoy/tank_decoy.json": ["vehicle", 0, { row: 1, column: 7 }],
    "/pa/units/land/tank_decoy_little/tank_decoy_little.json": ["vehicle", 0, { row: 2, column: 7 }],
    "/pa/units/air/thorondor/thorondor.json": ["air", 0, { row: 0, column: 3 }],
    "/pa/units/land/bot_drone/bot_drone.json": ["bot", 0, { row: 0, column: 4 }],
    "/pa/units/land/bot_tp/bot_tp.json": ["bot", 0, { row: 2, column: 8 }],
    "/pa/units/land/tank_shield/tank_shield.json": ["vehicle", 0, { row: 0, column: 2 }],
    "/pa/units/land/bot_tree/bot_tree.json": ["bot", 0, { row: 0, column: 5 }],
    "/pa/units/land/bot_sniper_big/bot_sniper_big.json": ["bot", 0, { row: 0, column: 2 }],
    "/pa/units/land/halabib/halabib.json": ["bot", 0, { row: 0, column: 6 }],
    "/pa/units/land/cuzeta/cuzeta.json": ["bot", 0, { row: 0, column: 1 }],
    "/pa/units/land/bumba/bumba.json": ["vehicle", 0, { row: 0, column: 4 }],
    "/pa/units/land/prex/prex.json": ["vehicle", 0, { row: 0, column: 1 }],
    "/pa/units/air/binho/binho.json": ["air", 0, { row: 0, column: 1 }],
    "/pa/units/land/maciota/maciota.json": ["combat", 0, { row: 0, column: 1 }],
    "/pa/units/land/canhao/canhao.json": ["combat", 0, { row: 2, column: 6 }],
    "/pa/units/land/kinha/kinha.json": ["combat", 0, { row: 1, column: 6 }],
    "/pa/units/land/hovertruck/hovertruck.json": ["combat", 0, { row: 0, column: 6 }],
    "/pa/units/land/tank_shield_2/tank_shield_2.json": ["bot", 0, { row: 0, column: 3 }]


}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}