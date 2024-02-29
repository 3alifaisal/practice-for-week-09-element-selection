const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    let seededFruits = document.body.querySelectorAll('.seed')
    console.log(seededFruits);
    // 2. Get all seedless fruit elements
    // Your code here
    let seedlessFruits = document.body.querySelectorAll('.seedless')
    console.log(seedlessFruits);
    // 3. Get first seedless fruit element
    // Your code here
    let firstSeedlessFruit = document.body.querySelector(".seedless")
    console.log(firstSeedlessFruit);
    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    
    let allSpanTags = document.body.querySelectorAll("span")
    let targetedSpanTag ;
    for(let i = 0; i < allSpanTags.length; i++){
        let currSpan = allSpanTags[i];
        if(currSpan.innerText === "you"){
            targetedSpanTag = currSpan
            break
        }
    }
    console.log(targetedSpanTag)
    // 5. Get all children of element "wrapper"
    // Your code here
    let elementWrapper = document.body.querySelector('#wrapper')
    console.log(elementWrapper.children)
    // 6. Get all odd number list items in the list
    // Your code here
    let oddNumberListItems = document.body.querySelectorAll('ol li.odd')
    console.log(oddNumberListItems);
    // 7. Get all even number list items in the list
    // Your code here
    let evenNumberListItems = document.body.querySelectorAll('ol li:not(.odd)')
    console.log(evenNumberListItems);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    let companiesWithoutaClass = document.body.querySelectorAll("section#three a:not([class])")
    console.log(companiesWithoutaClass);
    // 9. Get "Amazon" list element
    // Your code here
    let companyAmazon = document.body.querySelectorAll("section#three a.shopping")
    console.log(companyAmazon);
    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    let unicornListElements = document.body.querySelectorAll("h3+ul li")
    console.log(unicornListElements);
}

window.onload = select;