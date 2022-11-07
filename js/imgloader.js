fetch("https://gamertocoder.garena.co.th/api/assets").then((response) => {
  if (response.status !== 200) {
    return response.status;
  }
  return response.json();
}).then((data) => {
  if (typeof data == "number") {
    alert(data);
  } else {
    let sect = document.querySelector("#sect")
    for (let group of Object.keys(data)) {
      for (let item of data[group]) {
        let pic_ = `<img src="${item}" >`
          console.log(pic_)
        sect.insertAdjacentHTML("beforeend", pic_)
      }
    }

  };
})
