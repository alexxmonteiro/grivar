/* let tiles = {
    0: " ",
    1: "|",
    2: "*",
    3: "!",
    4: "@",
    5: "#",
    6: "$",
    7: "%",
    8: "hw",
    9: "p",
    10: "pt"
};

function drawMap(){
    console.clear();
    for(let i = 0; i < map.length; i++){
        let draw = "";
        for(let j = 0; j < map[i].length; j++){
            draw += tiles[map[i][j]];
        }
        console.log(draw);
    }
} 

                    switch (part.toLowerCase()) {
                        case 'head': hitRatio = enm.hitratio_head; break;
                        case 'torso': hitRatio = enm.hitratio_torso; break;
                        case 'larm': hitRatio = enm.hitratio_larm; break;
                        case 'rarm': hitRatio = enm.hitratio_rarm; break;
                        case 'lleg': hitRatio = enm.hitratio_lleg; break;
                        case 'rleg': hitRatio = enm.hitratio_rleg; break;
                    }

                    if(hitRatio <= 35){
                        n = haT();
                    }else if(hitRatio <= 75){
                        n = haT();
                        if(n != face){
                            n = haT();
                        }
                    }else if(hitRatio > 75){
                        n = haT();
                        if(n != face){
                            n = haT();
                            if(n != face){
                                n = haT();
                            }
                        }
                    }
*/