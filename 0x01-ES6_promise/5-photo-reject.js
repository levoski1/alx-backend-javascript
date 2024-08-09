export default function uploadPhoto(filename) {
    return new Promise(function (reject){
            reject( new Error(`${filename} cannot be processed`))
    })
}
