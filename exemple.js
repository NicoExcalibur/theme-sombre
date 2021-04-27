// Je selectionne les éléments 
let button = document.querySelector('#mode');
let span = document.querySelector('span');

// fonction mode sombre
function darkMode(){
  // classe du body sur dark
  document.body.classList.add('dark');
  // change le texte du bouton en thème clair
  span.textContent = 'Thème clair';
  // localStorage theme = sombre
  localStorage.setItem('theme', 'dark');
  
}


// programme
if (localStorage.getItem('theme')) {
  // valeur = sombre ?
    // oui : on apelle le mode sombre
    // non : rien
} else {
  // rien
}

// detection du clic
button.addEventListener('click', () => {
  // body classe dark ?
  if (document.body.classList.contains('dark')) {
    // oui : retire les classes de body / change le texte du bouton / localStorage theme = clair
    document.body.classList.remove('dark');
    span.textContent = 'Thème sombre';
    localStorage.setItem('theme', 'light');
  }else {
    // non : appele la fonction darkMode()
    darkMode();
  }
});



