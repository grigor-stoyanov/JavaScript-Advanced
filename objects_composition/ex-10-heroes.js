function solve(){
    heroCreator = {
        mage(name){
            return {
                name,
                health: 100,
                mana: 100,
                cast(spell){
                    console.log(`${name} cast ${spell}`)
                    this.mana -= 1
                }
            }
        },
        fighter(name){
            return{
                name,
                health: 100,
                stamina: 100,
                fight(){
                    console.log(`${name} slashes at the foe!`)
                    this.stamina -= 1
                }
            }
        }
    }
    return heroCreator
}




let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);