const otsikko = document.getElementById('otsikko');
const teksti = otsikko.textContent;
otsikko.textContent = '';


for (let i = 0; i < teksti.length; i++) {
  const kirjain = document.createElement('span');
  kirjain.textContent = teksti[i];
  kirjain.classList.add('animoitu-kirjain');
  otsikko.appendChild(kirjain);
  kirjain.addEventListener('mouseover', function () {
    kirjain.classList.add('animoi-kirjain');
  });
  
  kirjain.addEventListener('mouseout', function () {
    kirjain.classList.remove('animoi-kirjain');
  });
}