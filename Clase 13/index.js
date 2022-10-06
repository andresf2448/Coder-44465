let boton = document.getElementById("boton");

//SWEETALERT
/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue?",
    icon: "error",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Has agregado al carrito!",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: true,
    timer: 5000,
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
});
 */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica para sacar el producto del carrito

      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "ingrese el nombre",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Look up",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value}`,
      });
    }
  });
}); */

//TOASTIFY
/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

//LUXON
// const DateTime = luxon.DateTime;
// const fecha = DateTime.local(2022, 3, 12);
// console.log(fecha.c);
// const now = DateTime.now();
// console.log(now.toString());
// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// console.log(now.second);
// console.log(now.weekday);
// console.log(now.zoneName);
// console.log(now.daysInMonth);
// console.log(now.toLocaleString());
// console.log(now.toLocaleString(DateTime.DATE_FULL));
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
/* console.log(now.setLocale("es").toLocaleString(DateTime.DATE_FULL)); */

// const DateTime = luxon.DateTime;
// const now = DateTime.now();
// console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = now.plus({hours: 1, minutes:10});
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = now.minus({month: 1, days: 1});
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;
const now = DateTime.now();
const diciembre = DateTime.local(2022, 12, 25);
const i = Interval.fromDateTimes(now, diciembre);

console.log(i.length('days'));
console.log(i.length('hours'));
console.log(i.length('minutes'));