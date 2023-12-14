import {
  getQuoteOfTheDay,
  // інші імпорти з api.js
} from './api/api.js';

const QUOTE_KEY = 'quote';

const quoteDescription = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

async function fetchQuote() {
  try {
    const { author, quote } = await getQuoteOfTheDay();
    const currentDate = new Date().toLocaleDateString();
    localStorage.setItem(
      QUOTE_KEY,
      JSON.stringify({ author, quote, date: currentDate })
    );
  } catch (error) {
    console.error('Failed to fetch the quote:', error);
  }
}

function getQuoteLocalStorage() {
  const storedData = localStorage.getItem(QUOTE_KEY);
  const data = JSON.parse(storedData);
  return data;
}

function displayQuote() {
  const storedData = getQuoteLocalStorage();
  quoteDescription.textContent = storedData.quote;
  quoteAuthor.textContent = storedData.author;
}

async function renderStoredQuote() {
  const currentDate = new Date().toLocaleDateString();
  const storedData = getQuoteLocalStorage();

  if (storedData) {
    if (storedData.date === currentDate) {
      displayQuote();
      return;
    }
  }
  await fetchQuote();
  displayQuote();
}

document.addEventListener('DOMContentLoaded', renderStoredQuote);
