let problemMap = {};

const quotes = [
  "Eat. Sleep. Code. Repeat.",
  "Keep calm and debug on.",
  "Every bug you fix teaches you something.",
  "Hello World is just the beginning.",
  "Code is like humor — it works best when it’s clean.",
  "Behind every error is a lesson.",
  "Make it work, then make it better.",
  "Stay curious. Stay coding.",
  "A problem a day keeps imposter syndrome away.",
  "The best way to learn is to build."
];

window.onload = () => {
  document.getElementById('quote').innerText =
    quotes[Math.floor(Math.random() * quotes.length)];

  fetch('problems.json')
    .then(res => res.json())
    .then(data => problemMap = data);

  document.getElementById('openBtn').addEventListener('click', () => {
    const num = document.getElementById('problemNumber').value.trim();
    const slug = problemMap[num];
    if (slug) {
      chrome.tabs.create({ url: `https://leetcode.com/problems/${slug}/` });
    } else {
      showPopup();
    }
  });

  document.getElementById('close').addEventListener('click', () => {  
    closePopup();
  });
};

function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('show');
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
}
