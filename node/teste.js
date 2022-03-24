async function populate() {

        const requestURL = 'https://rickandmortyapi.com/api/character';
        const request = new Request(requestURL);

        const response = await fetch(request);
        const superHeroesText = await response.text();

        const superHeroes = JSON.parse(superHeroesText);
        populateHeader(superHeroes);
        populateHeroes(superHeroes);

        }

        function populateHeader(obj) {
        const header = document.querySelector('header');
        const myH1 = document.createElement('h1');
        myH1.textContent = obj['info'].count;
        header.appendChild(myH1);

        const inrormation = document.createElement('p');
        inrormation.textContent = `pages: ${obj['info'].pages}  next: ${obj['info'].next}`;
        header.appendChild(inrormation);
        }
        

        function populateHeroes(obj) {
        const section = document.querySelector('div');
        const characters = obj['results'];

        for (const hero of characters) {
            const myArticle = document.createElement('div');
            myArticle.classList.add("card")
            const myArticle1 = document.createElement('div');

            const myH2 = document.createElement('h5');
            myH2.classList.add("card-title")
            const myPara1 = document.createElement('p');
            myPara1.classList.add("card-text")
            const myPara2 = document.createElement('p');
            myPara2.classList.add("card-text")
            const myPara3 = document.createElement('small');
            myPara3.classList.add("text-muted")
            const myList = document.createElement('ul');

            myH2.textContent = hero.name;
            myPara1.textContent = `status: ${hero.status}`;
            myPara2.textContent = `Species: ${hero.species}`;
            myPara3.textContent = `created:  ${hero.created}`;

            

            myArticle1.appendChild(myH2);
            myArticle1.appendChild(myPara1);
            myArticle1.appendChild(myPara2);
            myArticle1.appendChild(myPara3);
            myArticle1.appendChild(myList);

            section.appendChild(myArticle1);
            }
        }

        populate();