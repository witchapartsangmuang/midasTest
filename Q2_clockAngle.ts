const clockAngle = (hh_mm: string):number => {
    const hh = parseInt(hh_mm.split(':')[0]) > 12 ? parseInt(hh_mm.split(':')[0]) - 12 : parseInt(hh_mm.split(':')[0])
    const mm = parseInt(hh_mm.split(':')[1])
    var angle:number = 0
    // find smallest angle
    if ((hh + (mm / 60)) >= mm / 5) {
        if ((((hh + (mm / 60)) - (mm / 5)) * 30) != 360) {
            if ((((hh + (mm / 60)) - (mm / 5)) * 30) > 180) {
                angle = 360 - (((hh + (mm / 60)) - (mm / 5)) * 30)
            } else {
                angle = (((hh + (mm / 60)) - (mm / 5)) * 30)
            }
        } else {
            return 0
        }
    } else {
        if ((((mm / 5) - (hh + (mm / 60))) * 30) != 360) {
            if ((((mm / 5) - (hh + (mm / 60))) * 30) > 180) {
                angle = 360 - (((mm / 5) - (hh + (mm / 60))) * 30)
            } else {
                angle = (((mm / 5) - (hh + (mm / 60))) * 30)
            }
        } else {
            return 0
        }
    }
    return angle
}
console.log(clockAngle('11:10'))
console.log(clockAngle('13:50'))
console.log(clockAngle('16:30'))
console.log(clockAngle('24:00')) // it same '12:00'