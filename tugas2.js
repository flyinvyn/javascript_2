const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];

const searchNames = (keywords, limit, callback, validasi) => {
    try {   
        validasi(keywords, limit);
    } catch (error) {
        return console.log(error); 
    }
    
    callback(keywords, limit);
};

const validasi = (keywords, limit) => {
        if (typeof keywords !== 'string') throw "Input harus string";
        if (isNaN(limit)) throw "Input harus number";
        if (!keywords) throw "Masukkan kata kunci";

};

const callback = (keywords, limit) => {
    const result = names.filter(name => name.toLowerCase().includes(keywords.toLowerCase())).slice(0, limit);
    console.log(result);
};

searchNames("ol", 3, callback, validasi);
searchNames(4, 3, callback, validasi);
searchNames("ol", "lk", callback, validasi);
searchNames("", 3, callback, validasi);


