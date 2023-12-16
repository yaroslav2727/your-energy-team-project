import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { createSubscription } from "../api/api";

const emailInput = document.querySelector(".subscribe-input");
const submitButton = document.querySelector(".submit-btn");

function isEmailUnique(email) {
  const storedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
  return !storedEmails.includes(email);
}

function saveEmailToLocalStorage(email) {
  let storedEmails = JSON.parse(localStorage.getItem("subscribedEmails")) || [];
  storedEmails.push(email);
  localStorage.setItem("subscribedEmails", JSON.stringify(storedEmails));
}

submitButton.addEventListener("click", async function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    if (isEmailUnique(email)) {
      try {
        const response = await createSubscription({ email });

        if (response) {
          saveEmailToLocalStorage(email);
          iziToast.show({
            title: "Email subscribed successfully!",
            color: "green",
            position: "topCenter",
            message: ``,
          });
          emailInput.value = "";
        } else {
          iziToast.show({
            title: "Failed to subscribe!",
            color: "red",
            position: "topCenter",
            message: ``,
          });
        }
      } catch (error) {
        console.error("Error:", error);
        iziToast.show({
          title: "An error occurred!",
          color: "red",
          position: "topCenter",
          message: ``,
        });
      }
    } else {
      iziToast.show({
        title: "Email already subscribed!",
        color: "red",
        position: "topCenter",
        message: ``,
      });
    }
  } else {
    iziToast.show({
      title: "Invalid email format!",
      color: "red",
      position: "topCenter",
      message: ``,
    });
  }
});
