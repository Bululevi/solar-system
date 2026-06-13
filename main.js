import "./style.css";
import "./space.js";

/* ---------------- PLANET DATA ---------------- */

const planets = {
  Mercury: { distance: 58, gravity: 3.7, diameter: 4879 },
  Venus: { distance: 108, gravity: 8.87, diameter: 12104 },
  Earth: { distance: 150, gravity: 9.81, diameter: 12742 },
  Mars: { distance: 228, gravity: 3.71, diameter: 6779 },
  Jupiter: { distance: 778, gravity: 24.79, diameter: 139820 },
  Saturn: { distance: 1430, gravity: 10.44, diameter: 116460 },
  Uranus: { distance: 2870, gravity: 8.69, diameter: 50724 },
  Neptune: { distance: 4500, gravity: 11.15, diameter: 49244 }
};

/* ---------------- FACTS ---------------- */

const facts = [
  "Mercury is the closest planet to the Sun, and because it has almost no atmosphere, its temperature can hit 800°F during the day and drop to -290°F at night.",
  "Because Mercury is so close to the Sun, it races through space at over 107,000 miles per hour—making it the fastest planet in our solar system.",
  "Many astronomers believe Mercury may be the core of what was once a much larger planet, leaving behind a massive ball of iron covered by a thin layer of rock.",
  "A day on Mercury is incredibly long; it takes 59 Earth days to complete just one rotation.",
  "Mercury's craters are uniquely named after famous artists, musicians, and authors rather than mythological gods.",
  "Venus is the second planet from the Sun and the hottest planet in the Solar System, even though it's not the closest one to it.",
  "The atmosphere on Venus is so thick and filled with sulfuric acid clouds that it traps heat in a runaway greenhouse effect, keeping surface temperatures over 860°F.",
  "A single day on Venus (one full rotation) takes 243 Earth days, which is actually longer than it takes for Venus to orbit the Sun (225 Earth days).",
  "Unlike most planets in our solar system, Venus spins on its axis in a retrograde (backward) direction, meaning the Sun rises in the west and sets in the east.",
  "Venus is the brightest natural object in the night sky after the Moon, often shining brightly enough to cast shadows on Earth.",
  "Earth is the third planet from the Sun and the only world in the universe known to harbor life.",
  "About 71% of Earth's surface is covered by oceans, containing roughly 96.5% of all the planet's water.",
  "Earth's atmosphere is mostly made up of nitrogen and oxygen, acting as a shield that burns up incoming meteoroids and protects us from solar radiation.",
  "The core of the Earth is mostly made of iron and is estimated to reach temperatures hotter than the surface of the Sun.",
  "Contrary to popular belief, Earth is not a perfect sphere; its rotation causes it to bulge slightly at the equator, making it an oblate spheroid.",
  "Mars, the fourth planet from the Sun, gets its famous red tint from the high amounts of iron oxide (rust) in its soil.",
  "Olympus Mons, a massive shield volcano on Mars, is the tallest planetary mountain in our solar system, standing nearly three times taller than Mount Everest.",
  "Mars is home to Valles Marineris, a colossal canyon system that is over 3,000 miles long and four times deeper than Earth's Grand Canyon.",
  "Mars has two small, potato-shaped moons named Phobos and Deimos, both of which were likely captured asteroids.",
  "If you stood on the equator on Mars, the temperature difference is so extreme that the ground would be warm enough to be comfortable for your feet, while the air at your head would be freezing.",
  "Jupiter is the fifth planet from the Sun and is so large that all the other planets in the solar system could easily fit inside it.",
  "Jupiter has a massive, swirling storm called the Great Red Spot that has been raging for centuries and is big enough to swallow Earth entirely.",
  "Jupiter has the shortest day of any planet, completing one full rotation in just under 10 hours.",
  "Jupiter possesses a staggering 95 officially recognized moons, including Ganymede, which is the largest moon in our solar system and is bigger than the planet Mercury.",
  "Together, Jupiter, Saturn, Uranus, and Neptune (the gas and ice giants) make up 99% of the mass that orbits the Sun.",
  "Saturn is the sixth planet from the Sun and is easily recognized by its spectacular ring system made primarily of ice particles, rocky debris, and dust.",
  "Despite being the second-largest planet in the solar system, Saturn is extremely light; if you could find a bathtub big enough, Saturn would float on water.",
  "Saturn's rings are remarkably thin, spanning up to 175,000 miles across but often being less than 30 feet thick in most places.",
  "Saturn currently holds the record for the most confirmed moons in our solar system, with a total count reaching 146.",
  "Titan, one of Saturn's largest moons, is the only moon in the solar system with a dense atmosphere and stable bodies of liquid on its surface, though it rains liquid methane instead of water.",
  "Uranus is the seventh planet from the Sun and was the first planet discovered with the use of a telescope.",
  "Uranus is tipped over on its side with a 98% tilt, meaning it practically orbits the Sun while rolling along on its side.",
  "Because of its unusual tilt, each of Uranus's poles experiences about 42 years of continuous sunlight, followed by 42 years of complete darkness.",
  "Uranus is often classified as an 'ice giant' because its atmosphere contains heavy elements like water, ammonia, and methane, surrounding a rocky core.",
  "Only a single spacecraft, NASA's Voyager 2, has ever flown by and visited Uranus.",
  "Neptune is the eighth and farthest official planet from the Sun.",
  "Neptune was the first planet to be located through mathematical calculations rather than direct observation.",
  "Winds on Neptune are the fastest in the solar system, sometimes blowing at a supersonic speed of over 1,200 miles per hour.",
  "Because of its immense distance, it takes over 4 hours for light from the Sun to reach Neptune, and the planet takes roughly 165 Earth years to complete just one orbit.",
  "Neptune has a dark, spinning storm called the Great Dark Spot, and its atmosphere is heavily shrouded in methane, which gives the planet its rich blue color.",
  "Pluto is the most famous dwarf planet in our solar system and was classified as the ninth planet from its discovery in 1930 until 2006.",
  "Pluto is incredibly small and is actually smaller than Earth's Moon.",
  "Pluto is very cold, with an average surface temperature hovering around -375°F.",
  "Pluto has a highly elliptical and tilted orbit, meaning it sometimes crosses inside the orbit of Neptune.",
  "Pluto is not alone; it has five known moons, the largest of which is Charon, which is so big that the two bodies are often called a 'double planet' system.",
  "There are four other officially recognized dwarf planets in our solar system: Ceres, Haumea, Makemake, and Eris.",
  "Ceres is unique because it is the only dwarf planet located in the asteroid belt between Mars and Jupiter.",
  "Eris is one of the most distant known dwarf planets and was actually the discovery of its mass that sparked the reclassification of Pluto.",
  "Together, all the planets make up just 0.14% of the solar system's total mass.",
  "Excluding Earth, every planet in our solar system is named after a god or goddess from Roman and Greek mythology."
];


/* ---------------- INIT DROPDOWNS ---------------- */

function initDropdowns() {
  const keys = Object.keys(planets);

  ["planet1", "planet2", "compare1", "compare2"].forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = keys.map(p => `<option>${p}</option>`).join("");
  });
}

/* ---------------- DISTANCE ---------------- */

function calculateDistance() {
  const p1 = document.getElementById("planet1").value;
  const p2 = document.getElementById("planet2").value;

  const dist = Math.abs(planets[p1].distance - planets[p2].distance);

  document.getElementById("distanceResult").textContent =
    `Distance: ${dist} million km`;
}

/* ---------------- COMPARE ---------------- */

function comparePlanets() {
  const p1 = document.getElementById("compare1").value;
  const p2 = document.getElementById("compare2").value;

  document.getElementById("comparisonResult").innerHTML = `
    <p><b>${p1}</b> vs <b>${p2}</b></p>
    <p>Distance: ${planets[p1].distance} vs ${planets[p2].distance}</p>
    <p>Gravity: ${planets[p1].gravity} vs ${planets[p2].gravity}</p>
    <p>Diameter: ${planets[p1].diameter} vs ${planets[p2].diameter}</p>
  `;
}

/* ---------------- FACT ---------------- */

function generateFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factDisplay").textContent = fact;
}

/* ---------------- NASA ---------------- */

async function loadNASA() {
  try {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=N0cfmWLvEJ1BQbWYvfmQBnOk4zHl7xuQxiaKKJX2"
    );

    const data = await res.json();

    document.getElementById("apodImage").src = data.url;
    document.getElementById("apodTitle").textContent = data.title;
    document.getElementById("apodDescription").textContent = data.explanation;

  } catch (err) {
    console.error("NASA error:", err);
  }
}

/* ---------------- INIT ---------------- */

window.addEventListener("DOMContentLoaded", () => {
  initDropdowns();
  loadNASA();

  document.getElementById("calcBtn").onclick = calculateDistance;
  document.getElementById("compareBtn").onclick = comparePlanets;
  document.getElementById("factBtn").onclick = generateFact;
});