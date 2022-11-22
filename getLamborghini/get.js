const cars$$ = document.querySelector(".cars");
const select$$ = document.querySelector(".select");
const button$$ = document.querySelector("button");


const peticion = () => {
    fetch("https://lamborghini-ferrari-api.vercel.app/lamborghini/name/" + select$$.value)
      .then((res) => res.json())
      .then((car) => lamborghiniPintar(car));
};

const getCars = () => {
  fetch("https://lamborghini-ferrari-api.vercel.app/cars")
    .then((res) => res.json())
    .then((cars) => rellenarSelect(cars));
};
  
const rellenarSelect = (cars) => {

  for (const car of cars) {

    const option$$ = document.createElement("option");

    option$$.value = car.name;
    option$$.textContent = car.name;

    select$$.appendChild(option$$);

  }
};

const lamborghiniPintar = (cars) => {
  cars$$.innerHTML = '';
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

button$$.addEventListener("click", peticion);
getCars();
