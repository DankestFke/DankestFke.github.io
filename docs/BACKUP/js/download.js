// Hitthemoney#1337

var settings = {
    idkr: '{"netRerouting":true,"servSendR":true,"freeKRPop":false,"resolution":1,"aspectRatio":"2x1","postProcessing":false,"mapDet":false,"particles":false,"particlesDist":10,"renderDist":40,"shadows":false,"yourTrails":false,"muzzleFlash":false,"textureAnim":false,"objectAnim":false,"screenShake":false,"lighting":"0","scaleUI":0.7,"oldScoreboard":true,"showPfp":false,"dynamicHP":false,"hitColor":"#f74855","showDMG":false,"dmgColor":"#ff1117","critColor":"#faff17","dmgScale":0.5,"showKillC":true,"showDeaths":true,"showScore":true,"showStreak":true,"showNetStat":true,"showFPS":true,"showSpeed":true,"speedOffY":7.5,"speedColor":"#000000","healthNum":true,"healthColT":"#42ff6c","healthColE":"#f31239","xpBarOpac":0,"chatFilter":true,"showUnboxings":false,"chatBGOp":0.4,"chatHeight":3,"crosshairSho":"2","crosshairImage":"https://cdn.discordapp.com/attachments/699571195195949056/726382782355603517/Common_cross.png","crosshairOpacity":0.8,"crosshairUseOpacity":true,"crosshairAlways":true,"crosshairColor":"#00ff00","crosshairLen":4.5,"crosshairGap":2,"hitm":false,"hitmCol":"#ffffff","hitmKCol":"#ff171d","hitmLen":15,"hitmThick":4,"hitmSpac":22,"hitmAnimD":0.1,"hitmAnimS":0.01,"hitmFad":0.0031,"sensitivityX":0.36,"sensitivityY":0.36,"aimSensitivityX":0.32,"aimSensitivityY":0.32,"gradSpeedMbl":true,"sound":0.3,"ambientVolume":0.1,"voiceVolume":0.1,"gunsVolume":0.1,"playerVolume":0.1,"uiVolume":0.1,"assetVolume":0.1,"anonMode":true,"fov":95,"fpsFOV":120,"weaponBob":0.5,"weaponLean":1,"weaponOffX":2,"weaponOffY":2,"weaponADSOffY":2,"adsFovMlt":0.2,"aimAnim":false,"hideADS":true,"showHands":false,"showWeapon":false,"showWeaponSec":false,"hudHealthHigh":"#0041ff","hudHealthLow":"#f50a10","scoreColor":"#e60005","scoreScale":0.9,"scoreOffY":3.6,"menuSaturation":1.3,"feedLimit":10,"bulletTracerCol":"#fbffcc","bulletTracers":false,"autoLoadLast":true,"scopeBorders":false,"reticleWidth":2.4,"reticleHeight":2.5,"endMessage":"ggwp","customKills":"https://cdn.discordapp.com/attachments/699571195195949056/702180603692449893/xi8xphklkqy31.png.webp","customDeaths":"https://cdn.discordapp.com/attachments/699571195195949056/702180259025518602/skull.png.webp","customStreak":"https://cdn.discordapp.com/attachments/699571195195949056/702180475556331561/wa8cbm55kqy31.png.webp","useDamageOverlay":false,"customDamage":"https://media.discordapp.net/attachments/719789737833005108/723463686634733568/blood.png","controls":{"wepVisKey":86}}',
    game: "in game settings"
};

console.log(settings.idkr);
console.log(settings.game);

function downloadText(text, name) {
    const blob = new Blob([text], {
        type: "text/plain"
    })
    const url = URL.createObjectURL(blob);
    document.body.appendChild(Object.assign(document.createElement("a"), {
        href: url,
        download: name,
        style: "display: none",
        clickRemove() {
            this.click()
            this.remove()
        }
    })).clickRemove()
}