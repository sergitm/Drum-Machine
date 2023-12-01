

function DrumPad({ id, url, keyTrigger }) {
    const handleClick = () => {
        const audio = document.getElementById(keyTrigger);
        audio.play();
        audio.currentTime = 0; 
        document.getElementById("display").innerHTML = id;

        document.getElementById(id).classList.add("active");
        setTimeout(() => {
            document.getElementById(id).classList.remove("active");
        }, 100);
    }

    return (
        <button className="drum-pad" id={id} onClick={handleClick}>
            {keyTrigger}
            <audio className="clip" id={keyTrigger} src={url} />
        </button>
    );
}

export default DrumPad;
