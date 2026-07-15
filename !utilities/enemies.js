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
                head_hp: 5,
                torso_hp: 18,
                larm_hp: 4.5,
                rarm_hp: 4.5,
                lleg_hp: 6,
                rleg_hp: 6,
                larm_dmg_base: 1.5,
                rarm_dmg_base: 0.5,
                legs_add_base: 0.2,
                legs_add_dmg() {
                    if (this.legs_add_base === 0) return 0;
                    return this.legs_add_base * (this.larm_dmg_base / this.rarm_dmg_base);
                },
                larm_dmg() {
                    return this.larm_dmg_base + this.legs_add_dmg();
                },
                rarm_dmg() {
                    return this.rarm_dmg_base + this.legs_add_dmg();
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
                head_hp: 3,
                torso_hp: 14,
                larm_hp: 4,
                rarm_hp: 4,
                lleg_hp: 4.5,
                rleg_hp: 4.5,
                larm_dmg_base: 0.5,
                rarm_dmg_base: 1.0,
                legs_add_base: 0.2,
                legs_add_dmg() {
                    if (this.legs_add_base === 0) return 0;
                    return this.legs_add_base * (this.larm_dmg_base / this.rarm_dmg_base);
                },
                larm_dmg() {
                    return this.larm_dmg_base + this.legs_add_dmg();
                },
                rarm_dmg() {
                    return this.rarm_dmg_base + this.legs_add_dmg();
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