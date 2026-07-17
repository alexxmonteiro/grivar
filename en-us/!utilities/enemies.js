import { d5 } from "./randomizr.js";

class Enemies {
    constructor() {
        this.entities = {};
    }

    registerEnemies(id, entitiesData) {
        this.entities[id] = entitiesData;
    }

    addEnemies(id) {
        if (this.entities[id]) {
            this.entities[id].parts_destructed = 0;
        }
    }

    info(id) {
        return this.entities[id];
    }

    enemySetAtributes(id) {
        if (id === 1) {
            Object.assign(this.entities[id], {
                head: true,
                torso: true,
                larm: true,
                rarm: true,
                lleg: true,
                rleg: true,
                parts_destructed: 0,
                head_hp: 6,
                torso_hp: 20,
                larm_hp: 7,
                rarm_hp: 7,
                lleg_hp: 8,
                rleg_hp: 8,
                larm_dmg_base: 1.8,
                rarm_dmg_base: 1.0,
                legs_add_base: 0.3,
                is_enraged: false,

                checkStatus() {
                    let missing_parts = 0;
                    if (!this.larm) missing_parts++;
                    if (!this.rarm) missing_parts++;
                    if (!this.lleg) missing_parts++;
                    if (!this.rleg) missing_parts++;

                    this.parts_destructed = missing_parts;
                    if (missing_parts > 0) {
                        this.is_enraged = true;
                        this.torso_hp -= (missing_parts * 0.5);
                    }
                },

                legs_add_dmg() {
                    if (this.legs_add_base === 0) return 0;
                    let multiplier = (this.lleg ? 0.5 : 0) + (this.rleg ? 0.5 : 0);
                    return this.legs_add_base * multiplier;
                },
                larm_dmg() {
                    if (!this.larm) return 0;
                    this.checkStatus();
                    let rage_buff = this.is_enraged ? 1.3 : 1.0;
                    return (this.larm_dmg_base + this.legs_add_dmg()) * rage_buff;
                },
                rarm_dmg() {
                    if (!this.rarm) return 0;
                    this.checkStatus();
                    let rage_buff = this.is_enraged ? 1.3 : 1.0;
                    return (this.rarm_dmg_base + this.legs_add_dmg()) * rage_buff;
                }
            });
        } else if (id === 2) {
            Object.assign(this.entities[id], {
                head: true,
                torso: true,
                larm: true,
                rarm: true,
                lleg: true,
                rleg: true,
                parts_destructed: 0,
                head_hp: 5.5,
                torso_hp: 22,
                larm_hp: 6.5,
                rarm_hp: 6.5,
                lleg_hp: 7.5,
                rleg_hp: 7.5,
                larm_dmg_base: 1.4,
                rarm_dmg_base: 1.6,
                legs_add_base: 0.28,
                checkStatus() {
                    let missing_parts = 0;
                    if (!this.larm) missing_parts++;
                    if (!this.rarm) missing_parts++;
                    if (!this.lleg) missing_parts++;
                    if (!this.rleg) missing_parts++;

                    this.parts_destructed = missing_parts;
                    if (missing_parts > 0) {
                        this.is_enraged = true;
                        this.torso_hp -= (missing_parts * 0.5);
                    }
                },

                legs_add_dmg() {
                    if (this.legs_add_base === 0) return 0;
                    let multiplier = (this.lleg ? 0.5 : 0) + (this.rleg ? 0.5 : 0);
                    return this.legs_add_base * multiplier;
                },
                larm_dmg() {
                    if (!this.larm) return 0;
                    this.checkStatus();
                    let rage_buff = this.is_enraged ? 1.3 : 1.0;
                    return (this.larm_dmg_base + this.legs_add_dmg()) * rage_buff;
                },
                rarm_dmg() {
                    if (!this.rarm) return 0;
                    this.checkStatus();
                    let rage_buff = this.is_enraged ? 1.3 : 1.0;
                    return (this.rarm_dmg_base + this.legs_add_dmg()) * rage_buff;
                }
            });
        }
    }

    enemyName(id) {
        if (this.entities[id]) {
            return this.entities[id].name;
        }
    }

    enemyAttack(id) {
        if (this.entities[id]) {
            return {
                1: this.entities[id].rarm_dmg(),
                2: this.entities[id].larm_dmg()
            }
        }
    }

    enemyLifePoints(id) {
        if (this.entities[id]) {
            return {
                1: this.entities[id].head_hp,
                2: this.entities[id].torso_hp,
                3: this.entities[id].rarm_hp,
                4: this.entities[id].larm_hp,
                5: this.entities[id].rleg_hp,
                6: this.entities[id].lleg_hp,
            }
        }
    }
}



export const enemies = new Enemies();

enemies.registerEnemies(1, {
    name: 'Skeleton'
});

enemies.registerEnemies(2, {
    name: "JJ"
});