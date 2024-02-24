let beast_says;

window.onload = () => {
  beast_says = document.getElementById('beast_says');
};

function beast(message) {
    beast_says.innerHTML = message;

    if (beast_says.className === 'whoa shaker') {
        beast_says.setAttribute('class', 'whoa pulse');
    }
    else {
        beast_says.setAttribute('class', 'whoa shaker');
    }
}