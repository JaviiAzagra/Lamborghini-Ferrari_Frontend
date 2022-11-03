const ferraris$$ = document.querySelector(".ferraris");
const select$$ = document.querySelector(".select");
const button$$ = document.querySelector("button");


const peticion = () => {
    fetch("https://lamborghini-ferrari-api.vercel.app/ferrari/name/" + select$$.value)
      .then((res) => res.json())
      .then((ferrari) => ferrariPintar(ferrari));
};

const getCars = () => {
  fetch("https://lamborghini-ferrari-api.vercel.app/ferrari")
    .then((res) => res.json())
    .then((ferraris) => rellenarSelect(ferraris));
};
  
const rellenarSelect = (cars) => {

  for (const car of cars) {

    const option$$ = document.createElement("option");

    option$$.value = car.name;
    option$$.textContent = car.name;

    select$$.appendChild(option$$);

  }
};

const ferrariPintar = (ferraris) => {
  ferraris$$.innerHTML = '';
  for (const ferrari of ferraris) {
    
    const ferrari$$ = document.createElement("div");
    const model$$ = document.createElement("h1");
    const name$$ = document.createElement("h3");
    const price$$ = document.createElement("p");
    const power$$ = document.createElement("p");
    const max$$ = document.createElement("p");
    const img$$ = document.createElement("img");

    ferrari$$.classList.add("ferrari")
    model$$.textContent = ferrari.model;
    name$$.textContent = ferrari.name;
    price$$.textContent = "precio: " + ferrari.price + " €";
    power$$.textContent = "Caballos de potencia: " + ferrari.power_cv + " CV";
    max$$.textContent = "Velocidad máxima: " + ferrari.max_speed;
    img$$.src = ferrari.img;

    ferrari$$.appendChild(model$$);
    ferrari$$.appendChild(name$$);
    ferrari$$.appendChild(img$$);
    
    ferrari$$.appendChild(power$$);
    ferrari$$.appendChild(max$$);
    ferrari$$.appendChild(price$$);
    
    ferraris$$.appendChild(ferrari$$);
  }
};

button$$.addEventListener("click", peticion);
getCars();