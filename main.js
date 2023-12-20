const key = "wedlPLg0YrmZfbaBEKgYaVHpglGaDc1UXFJN0Kaz"

async function fetchAPI(key) {
  const APIResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
  
  if(APIResponse.status == 200) {
    const data = await APIResponse.json();
    return data;
  }
}

async function showAPI() {
    const data = await fetchAPI(key);
    console.log(data);

    const image = document.getElementById("iotd");
    image.setAttribute("src", data.hdurl);

    const missionTitle = document.getElementById("mission-title");
    missionTitle.textContent = data.title + ' ' + data.date;
}

showAPI();

