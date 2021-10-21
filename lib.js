/**
 * @param {NodeList} targets
 * 
 */

 class TypeWriter {
    constructor(targets) {
        let nodeArray = Array.from(targets);
        
        this.elements = nodeArray.length;

        nodeArray.forEach(element => {
            if (!element.getAttribute("data-typetext")) {
                return console.error(new Error("TypeWriter: Element has no attributes called data-typetext."))
            }
            /**
            * @type {String} text
            * @type {Number} speed
            */
            let text = element.dataset.typetext;
            let speed = isNaN(parseInt(element.dataset.typespeed)) ? 50 : parseInt(element.dataset.typespeed);
            let delay = isNaN(parseInt(element.dataset.typedelay)) ? 0 : parseInt(element.dataset.typedelay);
            let tag = element;

            element.typeWriter = {
                text: text,
                speed: speed,
                delay: delay
            }

            setTimeout(() => {
                for (let i = 0; i < text.length; i++) {
                    let j = i;
                    setTimeout(() => {
                        tag.innerHTML += text.charAt(i);
                    }, speed * j + 1)
                }
            }, delay);
        })
    }
}
let listDatatypetext = document.querySelectorAll("[data-typetext]");

new TypeWriter(listDatatypetext)