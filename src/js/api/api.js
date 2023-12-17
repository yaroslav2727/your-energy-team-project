import axios from "axios";
import {
  BASE_URL,
  DEFAULT_EXERCISES_LIMIT,
  DEFAULT_EXERCISES_LIMIT_MOB,
  DEFAULT_FILTER_LIMIT,
  DEFAULT_FILTER_LIMIT_MOB,
} from "./config";

let limit = window.innerWidth < 768 ? DEFAULT_FILTER_LIMIT_MOB : DEFAULT_FILTER_LIMIT;
let limitExe = window.innerWidth < 768 ? DEFAULT_EXERCISES_LIMIT_MOB : DEFAULT_EXERCISES_LIMIT;

const api = axios.create({
  baseURL: BASE_URL,
  params: {},
});

//---------------Filters---------------------------------------------------------------
export const getFilteredList = async (filter, page = 1) => {
  const response = await api.get("/filters", {
    params: {
      filter,
      page,
      limit: limit,
    },
  });
  return response.data;
};

export const getMusclesList = async (page = 1) => {
  const response = await api.get("/filters", {
    params: {
      filter: "Muscles",
      page,
      limit: limit,
    },
  });
  return response.data;
};

export const getBodyPartsList = async (page = 1) => {
  const response = await api.get("/filters", {
    params: {
      filter: "Body parts",
      page,
      limit: limit,
    },
  });
  return response.data;
};

export const getEquipmentList = async (page = 1) => {
  const response = await api.get("/filters", {
    params: {
      filter: "Equipment",
      page,
      limit: limit,
    },
  });
  return response.data;
};

//------------------------------------------------------------------------------
//
//
//
//
//------------------Quote------------------------------------------------------------
export const getQuoteOfTheDay = async () => {
  const response = await api.get("/quote");
  return response.data;
};
//------------------------------------------------------------------------------
//
//
//
//
//------------------Exercises------------------------------------------------------------
export const getExercises = async ({ bodypart, muscles, equipment, search }, page = 1) => {
  const checkedSearch = search && !bodypart && !muscles && !equipment ? "" : search;

  const response = await api.get("/exercises", {
    params: {
      bodypart: bodypart || "",
      muscles: muscles || "",
      equipment: equipment || "",
      keyword: checkedSearch || "",
      page,
      limit: limitExe,
    },
  });
  return response.data;
};

export const getExerciseById = async id => {
  const response = await api.get(`/exercises/${id}`);
  return response.data;
};
//------------------Raiting-----------------------------------------------------------
export const patchRating = async (id, data) => {
  const response = await api.patch(`/exercises/${id}/rating`, data);
  return response.data;
};
//------------------Subscription-----------------------------------------------------------
export const createSubscription = async data => {
  const response = await api.post("/subscription", data);
  return response.data;
};
