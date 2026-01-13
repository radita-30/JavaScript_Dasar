let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f )
let data1 = 'ucup berkata "apa kabar dunia?"';
console.log(data1);
let data2 = "ucup berkata \"tetep asyik\"";
console.log(data2);
let data3 = "ucup berjalan-jalan di tepi pantai, \nkereeen";
console.log(data3);

//2. Literal string (template Literal String)
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 10;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // menjadi nasyalah 
console.log(namaLengkap);

// lebih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);