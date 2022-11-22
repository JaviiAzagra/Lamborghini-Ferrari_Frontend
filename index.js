const cars$$ = document.querySelector(".cars");
const ferraris$$ = document.querySelector(".ferraris");

const peticion = () => {
  fetch("https://lamborghini-ferrari-api.vercel.app/lamborghini")
  /* fetch("http://localhost:3000/cars") */
    .then((res) => res.json())
    .then((cars) => pintar(cars));
};

const pintar = (cars) => {

  for (const car of cars) {
    
    const car$$ = document.createElement("div");
    const model$$ = document.createElement("h1");
    const name$$ = document.createElement("h3");
    const price$$ = document.createElement("p");
    const power$$ = document.createElement("p");
    const max$$ = document.createElement("p");
    const img$$ = document.createElement("img");

    car$$.classList.add("car")
    model$$.textContent = car.model;
    name$$.textContent = car.name;
    price$$.textContent = "precio: " + car.price + " €";
    power$$.textContent = "Caballos de potencia: " + car.power_cv + " CV";
    max$$.textContent = "Velocidad máxima: " + car.max_speed;
    img$$.src = car.img;

    car$$.appendChild(model$$);
    car$$.appendChild(name$$);
    car$$.appendChild(img$$);
    
    car$$.appendChild(power$$);
    car$$.appendChild(max$$);
    car$$.appendChild(price$$);
    
    cars$$.appendChild(car$$);
  }
};

const peticion2 = () => {
  fetch("https://lamborghini-ferrari-api.vercel.app/ferrari")
  /* fetch("http://localhost:3000/ferrari") */
    .then((res) => res.json())
    .then((ferraris) => ferrariPintar(ferraris));
};

const ferrariPintar = (ferraris) => {

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

peticion();
peticion2();
