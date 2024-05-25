import axios from "axios";

function generateJokes() {
  const config = {
    headers: {
      Accept: "application/json"
    }
  };
  axios.get("http://icanhazdadjoke.com", config).then((res) => {
    document.getElementById("joke").innerHTML = res.data.joke;
  });
}

export default generateJokes;
