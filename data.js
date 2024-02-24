const nama = "bagas setyawan";
let umur = 25;

const biodata = document.getElementById('biodata')


// function generateBiodata() {
//     if(umur >20 && umur <=50) {
//         console.log('orang dewasa')
//     } else  if (umur >=15 && umur <=20) {
//         console.log('anda seorang remaja')
//     } else  if (umur >50 ) {
//         console.log('anda seorang lansia')
//     } else {
//         console.log('anda masih anak-anak')
//     } 
//     console.log("nama saya adalah", nama , "usia saya", umur, "tahun")
// }


function generateBiodata() {
let generasi;

    if(umur >20 && umur <=50) {
        generasi = "generasi tua"
    } else  if (umur >=15 && umur <=20) {
        generasi = "generasi remaja"
    } else  if (umur >50 ) {
        generasi = "generasi lansia"
    } else {
        generasi = "generasi anak-anak"
    } 

    return biodata.innerHTML = generasi;
}