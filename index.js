let hours = 0

while (hours < 24) {
    let minutes = 0

    while (minutes < 60) {
        console.log(`${hours}:${minutes.toString().padStart(2, "0")}`)
        minutes++
    }
    hours++
}
