let name = document.querySelector(".Name");
let year = document.querySelector(".Year");
let inputImg = document.querySelector(".InputImg");
let inputVidio = document.querySelector(".InputVidio");
let Create = document.querySelector(".btn4");
let list = document.querySelector(".list");
let hero_edit_block = document.querySelector(".hero_edit_block");
let btn_icon = document.querySelector(".btn_icon");
let btn_icons = document.querySelector(".btn_icons");
let iframe = document.querySelector(".iframe");
let hero_v = document.querySelector(".hero-v");
let btnX = document.querySelector(".btnX");
let Сhange = document.querySelector(".btn5");
FilmsProduct();

Create.addEventListener("click", () => {
  let obj = {
    id: Date.now(),
    name: name.value,
    year: year.value,
    inputImg: inputImg.value,
    inputVidio: inputVidio.value,
  };
  let data = JSON.parse(localStorage.getItem("Films")) || [];
  data.push(obj);
  localStorage.setItem("Films", JSON.stringify(data));
  FilmsProduct();
});
function FilmsProduct() {
  list.innerHTML = "";

  let data = JSON.parse(localStorage.getItem("Films")) || [];
  data.forEach((el, idx) => {
    let listDiv = document.createElement("div");
    listDiv.classList.add("listDiv");
    let listImg = document.createElement("img");
    listImg.classList.add("listImg");
    let listName = document.createElement("h2");
    listName.classList.add("listName");
    let listYaer = document.createElement("h3");
    listYaer.classList.add("listYaer");
    //
    let ListBtnDiv = document.createElement("div");
    ListBtnDiv.classList.add("ListBtnDiv");
    let ListBtnSee = document.createElement("button");
    ListBtnSee.classList.add("ListBtnSee");
    let ListBtnEdit = document.createElement("button");
    ListBtnEdit.classList.add("ListBtnEdit");
    let ListBtnDelate = document.createElement("button");
    ListBtnDelate.classList.add("ListBtnDelate");
    //

    listImg.src = el.inputImg;
    listName.innerHTML = el.name;
    listYaer.innerHTML = el.year;

    //
    ListBtnSee.innerHTML = `<ion-icon name="play-circle-outline"></ion-icon> see`;
    ListBtnEdit.innerHTML = `<ion-icon name="create-outline"></ion-icon> edit`;
    ListBtnDelate.innerHTML = `<ion-icon name="close-outline"></ion-icon> delate`;
    //

    listDiv.append(listImg);
    listDiv.append(listName);
    listDiv.append(listYaer);

    ListBtnDiv.append(ListBtnSee);
    ListBtnDiv.append(ListBtnEdit);
    ListBtnDiv.append(ListBtnDelate);
    listDiv.append(ListBtnDiv);
    list.append(listDiv);

    //
    ListBtnEdit.addEventListener("click", () => {
      hero_edit_block.style.display = "block";
      updateMovies(idx);
    });

    btn_icon.addEventListener("click", () => {
      hero_edit_block.style.display = "none";
    });
    btn_icons.addEventListener("click", () => {
      iframe.style.display = "none";
      btn_icons.style.display = "none";
    });
    ListBtnSee.addEventListener("click", () => {
      iframe.src = el.inputVidio;
      iframe.style.display = "block";
      iframe.style.width = "100%";
      btnX.style.display = "block";
    });

    btnX.addEventListener("click", () => {
      iframe.style.display = "none";
      btnX.style.display = "none";
    });

    ListBtnDelate.addEventListener("click", () => {
      data = data.filter((item) => item.id !== el.id);
      localStorage.setItem("Films", JSON.stringify(data));
      listDiv.remove();
    });

    name.value = "";
    year.value = "";
    inputImg.value = "";
    inputVidio.value = "";
  });
}

//

let inpEditOne = document.querySelector(".inpEditOne");
let inpEditTwo = document.querySelector(".inpEditTwo");
let inpEditThree = document.querySelector(".inpEditThree");
let inpEditFour = document.querySelector(".inpEditFour");
let btn_save = document.querySelector(".btn5");
function updateMovies(index) {
  let data = JSON.parse(localStorage.getItem("Films")) || [];

  inpEditOne.setAttribute("id", index);
  inpEditTwo.setAttribute("id", index);
  inpEditThree.setAttribute("id", index);
  inpEditFour.setAttribute("id", index);

  inpEditOne.value = data[index].name;
  inpEditTwo.value = data[index].year;
  inpEditThree.value = data[index].inputImg;
  inpEditFour.value = data[index].inputVidio;
}
btn_save.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("Films")) || [];

  let nameId = inpEditOne.id;
  let yearId = inpEditTwo.id;
  let inputImgId = inpEditThree.id;
  let inputVidioId = inpEditFour.id;

  let edidObj = {
    id: Date.now(),
    name: inpEditOne.value,
    year: inpEditTwo.value,
    inputImg: inpEditThree.value,
    inputVidio: inpEditFour.value,
  };
  data.splice(nameId, 1, edidObj);
  data.splice(yearId, 1, edidObj);
  data.splice(inputImgId, 1, edidObj);
  data.splice(inputVidioId, 1, edidObj);
  localStorage.setItem("Films", JSON.stringify(data));
  FilmsProduct();
});

// {
//   /* <iframe width="1280" height="720" src="https://www.youtube.com/embed/s1ax8Tx_Jz0" title="Что ТЫ выберешь: Ламборгини или Этот Дом?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
// }

// <iframe
//   width="1280"
//   height="720"
//   src="https://www.youtube.com/embed/trgr_oGwNR4"
//   title="Фильм Брат или Брак. Официально!!!"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   allowfullscreen
// ></iframe>;

// {
//   /* <iframe width="1280" height="720" src="https://www.youtube.com/embed/DUECrw7P6TM" title="Home Alone 1990 Movie || Macaulay Culkin, Joe Pesci, Daniel Stern || Home Alone Movie Full Review HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
// }
