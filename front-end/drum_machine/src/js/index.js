console.log('It works');

const handlePlusClick = () => {
    onclick=document.getElementById('Q').style.backgroundColor = "red"
    setTimeout(change,2000)
    // audio='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    // audio.play()
};

const change = () => {
    document.getElementById('Q').style.backgroundColor = "white"
}

document.addEventListener('DOMContentLoaded', () => {
  const btnQ = document.querySelector('#Q');
  btnQ.addEventListener('click', handlePlusClick);
});

