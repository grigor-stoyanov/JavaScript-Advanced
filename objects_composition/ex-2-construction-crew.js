function modifyCrew(worker) {
    if (worker.dizziness){
        worker.levelOfHydrated += worker.weight*worker.experience*0.1
    }
    return worker
}

modifyCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})
modifyCrew(
    { weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true }
)
modifyCrew(
    { weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false }
)