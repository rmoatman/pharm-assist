// start here-- app called from index.js
const getInteraction = (query, query2) => {
        // query contains MedOne
        return fetch(`https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${query}+${query2}`);
    };

export default getInteraction;
