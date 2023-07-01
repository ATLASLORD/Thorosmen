var newBuild = {

    "/pa/units/thorosmen/titan_egg_build/titan_egg_build.json": ["factory", 0, { row: 0, column: 0 }],
    "/pa/units/thorosmen/st_bot_white_hole/st_bot_white_hole.json": ["Asemititan", 0, { row: 2, column: 0 }],
    "/pa/units/thorosmen/st_lawnmower/st_lawnmower.json": ["Asemititan", 0, { row: 2, column: 1 }],
    "/pa/units/thorosmen/st_ilegal/st_ilegal.json": ["Asemititan", 0, { row: 1, column: 2 }],
    "/pa/units/thorosmen/st_ggspider_build/st_ggspider_build.json": ["Asemititan", 0, { row: 0, column: 1 }],
    "/pa/units/thorosmen/st_bot_anti_nuke/st_bot_anti_nuke.json": ["Asemititan", 0, { row: 0, column: 0 }],
    "/pa/units/thorosmen/st_airship/st_airship.json": ["Asemititan", 0, { row: 0, column: 2 }],
    "/pa/units/thorosmen/st_pap/st_pap.json": ["Asemititan", 0, { row: 1, column: 0 }],
    "/pa/units/thorosmen/st_fef/st_fef.json": ["Asemititan", 0, { row: 1, column: 1 }],
    "/pa/units/thorosmen/st_colum/st_colum.json": ["Asemititan", 0, { row: 2, column: 2 }],

    "/pa/units/thorosmen/metal_destructor/metal_destructor.json": ["structure", 0, { row: 1, column: 0 }],
    "/pa/units/thorosmen/titan_radar/titan_radar.json": ["structure", 0, { row: 0, column: 0 }],

    "/pa/units/thorosmen/tank_drone/tank_drone/tank_drone.json": ["vehicle", 0, { row: 0, column: 3 }],
    "/pa/units/thorosmen/tank_decoy/tank_decoy.json": ["vehicle", 0, { row: 1, column: 7 }],
    "/pa/units/thorosmen/tank_decoy_little/tank_decoy_little.json": ["vehicle", 0, { row: 2, column: 7 }],
    "/pa/units/thorosmen/thorondor/thorondor.json": ["air", 0, { row: 0, column: 3 }],
    "/pa/units/thorosmen/bot_drone/bot_drone.json": ["bot", 0, { row: 0, column: 4 }],
    "/pa/units/thorosmen/bot_tp/bot_tp.json": ["bot", 0, { row: 2, column: 8 }],
    "/pa/units/thorosmen/tank_shield/tank_shield.json": ["vehicle", 0, { row: 0, column: 7 }],
    "/pa/units/thorosmen/bot_tree/bot_tree.json": ["bot", 0, { row: 0, column: 5 }],
    "/pa/units/thorosmen/bot_sniper_big/bot_sniper_big.json": ["bot", 0, { row: 0, column: 2 }],
    "/pa/units/thorosmen/halabib/halabib.json": ["bot", 0, { row: 0, column: 6 }],
    "/pa/units/thorosmen/cuzeta/cuzeta.json": ["bot", 0, { row: 0, column: 1 }],
    "/pa/units/thorosmen/bumba/bumba.json": ["vehicle", 0, { row: 0, column: 4 }],
    "/pa/units/thorosmen/prex/prex.json": ["vehicle", 0, { row: 0, column: 2 }],
    "/pa/units/thorosmen/binho/binho.json": ["air", 0, { row: 0, column: 1 }],
    "/pa/units/thorosmen/maciota/maciota.json": ["combat", 0, { row: 0, column: 1 }],
    "/pa/units/thorosmen/canhao/canhao.json": ["combat", 0, { row: 2, column: 6 }],
    "/pa/units/thorosmen/kinha/kinha.json": ["combat", 0, { row: 1, column: 6 }],
    "/pa/units/thorosmen/bunker_build/bunker_build.json": ["combat", 0, { row: 0, column: 6 }],
    "/pa/units/thorosmen/dagua/dagua.json": ["bot", 0, { row: 2, column: 9 }],
    "/pa/units/thorosmen/lolis/lolis.json": ["air", 0, { row: 0, column: 5 }],
    "/pa/units/thorosmen/healer/healer/healer.json": ["bot", 0, { row: 1, column: 8 }],
    "/pa/units/thorosmen/bot_freeze/bot_freeze.json": ["bot", 0, { row: 0, column: 8 }],
    "/pa/units/thorosmen/gigatank/gigatank.json": ["vehicle", 0, { row: 0, column: 1 }],
    "/pa/units/thorosmen/bot_shield_wall/bot_shield_wall.json": ["bot", 0, { row: 0, column: 3 }]


}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}