//kod pro funkce zobrazovani jednotlivych pokoju
const rooms = [
  {
    image: 'images/deluxe_room.jpg', 
    name: 'Premium Pokoj',
    description: 'Pokoj naší nejvyšší kategorie, s nádherným výhledem na Prahu. Pokoj je vhodný pro 2-4 osoby a se skládá z ložnice, obývacího pokoje, koupelny, terasy a moderního vybavení.'
  },
  {
    image: 'images/deluxe2_room.jpg', 
    name: 'Deluxe Pokoj',
    description: 'Prostorný a moderně zařízený pokoj s výhledem na Prahu pro 2-4 osoby. Pokoj se skládá z ložnice a koupelny. Součástí pokoje je TV, varná konvice, mini-bar a úložný prostor.'
  },
  {
    image: 'images/standard_room.jpg', 
    name: 'Standard Pokoj',
    description: 'Standartní, jednoduchý pokoj, ale pohodlný pro 1-2 osoby. Pokoj se skládá z ložnice a koupelny. Součástí pokoje je TV, varná konvice, mini-bar a úložný prostor.'
  }
];

let currentRoomIndex = 0;

function updateRoom() {
  const room = rooms[currentRoomIndex];
  document.getElementById('room-image').src = room.image;
  document.getElementById('room-name').textContent = room.name;
  document.getElementById('room-description').textContent = room.description;
}

function prevRoom() {
  currentRoomIndex = (currentRoomIndex === 0) ? rooms.length - 1 : currentRoomIndex - 1;
  updateRoom();
}

function nextRoom() {
  currentRoomIndex = (currentRoomIndex === rooms.length - 1) ? 0 : currentRoomIndex + 1;
  updateRoom();
}

// Inicializace prvního pokoje
updateRoom();

// Nastavení data a času do konce akce
const countDownDate = new Date("2025-06-30T23:59:59").getTime();

// Aktualizace odpočítávání každou sekundu
const x = setInterval(function() {
    // Získání aktuálního času
    const now = new Date().getTime();
    
    // Výpočet zbývajícího času
    const distance = countDownDate - now;

    // Výpočet dnů, hodin, minut a sekund
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Zobrazení výsledku v požadovaném elementu
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Pokud odpočet skončí, zobrazí se zpráva
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Akce skončila!";
    }
}, 1000);