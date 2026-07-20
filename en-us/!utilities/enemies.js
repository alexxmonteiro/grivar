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
        } else if (id === 3) {
            Object.assign(this.entities[id], {
                larm: true,
                rarm: true,
                head: true,
                larm_a: true, larm_b: true, larm_c: true, larm_d: true, larm_e: true,
                rarm_a: true, rarm_b: true, rarm_c: true, rarm_d: true, rarm_e: true,

                head_hp: 25.0,
                larm_a_hp: 8.5, larm_b_hp: 7.5, larm_c_hp: 9.5, larm_d_hp: 9.0, larm_e_hp: 7.0,
                rarm_a_hp: 8.5, rarm_b_hp: 7.5, rarm_c_hp: 9.5, rarm_d_hp: 9.0, rarm_e_hp: 7.0,

                larm_a_dmg_base: 1.0, larm_b_dmg_base: 0.7, larm_c_dmg_base: 2.0, larm_d_dmg_base: 1.5, larm_e_dmg_base: 1.3,
                rarm_a_dmg_base: 1.0, rarm_b_dmg_base: 0.7, rarm_c_dmg_base: 2.0, rarm_d_dmg_base: 1.5, rarm_e_dmg_base: 1.3,

                is_enraged: false,
                parts_destructed: 0,

                checkStatus() {
                    let missing_parts = 0;
                    const parts = ['larm_a', 'larm_b', 'larm_c', 'larm_d', 'larm_e', 'rarm_a', 'rarm_b', 'rarm_c', 'rarm_d', 'rarm_e'];

                    parts.forEach(part => {
                        if (!this[part]) missing_parts++;
                    });

                    this.parts_destructed = missing_parts;
                    if (missing_parts > 0) {
                        this.is_enraged = true;
                        this.head_hp -= (missing_parts * 0.5);
                    }
                },

                larm_dmg() {
                    if (!this.larm) return null;
                    this.checkStatus();
                    let rage_buff = this.is_enraged ? 1.3 : 1.0;

                    return {
                        a: this.larm_a ? this.larm_a_dmg_base * rage_buff : 0,
                        b: this.larm_b ? this.larm_b_dmg_base * rage_buff : 0,
                        c: this.larm_c ? this.larm_c_dmg_base * rage_buff : 0,
                        d: this.larm_d ? this.larm_d_dmg_base * rage_buff : 0,
                        e: this.larm_e ? this.larm_e_dmg_base * rage_buff : 0
                    };
                },

                rarm_dmg() {
                    if (!this.rarm) return null;
                    this.checkStatus();
                    let rage_buff = this.is_enraged ? 1.3 : 1.0;

                    return {
                        a: this.rarm_a ? this.rarm_a_dmg_base * rage_buff : 0,
                        b: this.rarm_b ? this.rarm_b_dmg_base * rage_buff : 0,
                        c: this.rarm_c ? this.rarm_c_dmg_base * rage_buff : 0,
                        d: this.rarm_d ? this.rarm_d_dmg_base * rage_buff : 0,
                        e: this.rarm_e ? this.rarm_e_dmg_base * rage_buff : 0
                    };
                },
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

    bossAttack() {
        const boss = this.entities[3];
        if (!boss) return null;

        boss.checkStatus();
        let rage_buff = boss.is_enraged ? 1.3 : 1.0;

        const parts = [
            'larm_a', 'larm_b', 'larm_c', 'larm_d', 'larm_e',
            'rarm_a', 'rarm_b', 'rarm_c', 'rarm_d', 'rarm_e'
        ];

        let attackDamage = {};

        parts.forEach(part => {
            attackDamage[part] = boss[part]
                ? boss[`${part}_dmg_base`] * rage_buff
                : 0;
        });

        return attackDamage;
    }

    bossLifePoints() {
        const enemy = this.entities[3];
        if (!enemy) return null;

        let lifePoints = {
            head: enemy.head_hp || 0
        };

        const parts = [
            'larm_a', 'larm_b', 'larm_c', 'larm_d', 'larm_e',
            'rarm_a', 'rarm_b', 'rarm_c', 'rarm_d', 'rarm_e'
        ];

        parts.forEach(part => {
            lifePoints[part] = enemy[`${part}_hp`] || 0;
        });

        return lifePoints;
    }
}

export const enemies = new Enemies();

enemies.registerEnemies(1, {
    name: 'Skeleton'
});

enemies.registerEnemies(2, {
    name: "JJ"
});

enemies.registerEnemies(3, {
    name: "Receptacle of a thousand hands"
});