/* Example 1
    Funksiyaning ishlashi agar 1-parametrdagi harflar 
    2-parametrda ham bir xil bo'lsa ushbu javob 'True' qiymatini qaytaradi.
    Bu yerda harflarning ketma-ketligi muhim emas muhimi ularning bir xilligi

    s = 'anagram' // aaagmnr --> 
    t = 'nagaram' // aaagmnr -->
    true
*/

/* Example 2
    Aks holda 'False' qiymatini qaytaradi !!
    s = 'cat' // acr 
    t = 'car' // act
    false
*/

function isValidAnagram(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
}

console.log(isValidAnagram('anagram' , 'nagaram'));
console.log(isValidAnagram('cat' , 'car'));