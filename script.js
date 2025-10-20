// Show section & hide others
function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function changeSong(link) {
  const player = document.getElementById("songPlayer");
  player.src = link;
  player.play();
}

// Cake message popup
function cutCake() {
  const cakeMsg = document.getElementById("cakeMsg");
  cakeMsg.style.display = "block";
}

function showFinalMessage() {
  typeMessage(`Happy Birthday meri jaan myyy betaaa 💋💋💋

Kbhi kbhi sochti hoon, kaise itna pyaara koi meri life me aaya... aur phir yaad ata hai ki shayad upar wale ne mujhe thoda zyada pyaar kar liya syd, tabhi tumhe bhej diya meri life me yrrrr betaaa I loveee u soo muchhhh

Aaj tumhara din hai — aur me chahti hu ki har khushi, har hasi, sb mile tumhe u r my everything Tum deserve krte ho duniya ka saara pyaar, saara my bchaaa

Main nahi jnti aaj ke din tum kya wish kar rahe ho, par main yeh zarur chahti hun— tumhari har wish puri ho or m apni wish me tumhe maang lun. Tumhe hamesha khush dekhna yhi chahti hu m hmesha yr beta hmesha khush rehnaaa merii jnnn 😙♥🫀🫀🫀

Tumhare bina sab kuch bekr lagta hai. Tumhare bina hr cheez adhuri lgti h yrrr

Bs aaj ke din itna kehna chahti hu — thank you for being you. Thank you for being the reason behind my peace, my smile nd eveything 

Happy Birthday once again, mere dil ke tukda😙😙😙
Kabhi mat badalna… tum jaise ho, tum perfect ho. Meri jnnnn💫

— Tumhari chhutki 💌`);
}

function typeMessage(text) {
  let i = 0;
  const target = document.getElementById("typedMessage");
  target.innerHTML = "";
  const typing = setInterval(() => {
    target.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 50);
}

// Floating hearts creation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Generate hearts continuously
setInterval(createHeart, 500);

// Balloon animation
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.animationDuration = 8 + Math.random() * 5 + "s";
  balloon.style.opacity = 0.7 + Math.random() * 0.3;
  document.getElementById("balloons-container").appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 13000);
}

// Generate balloons continuously (every 1.5 seconds)
setInterval(createBalloon, 1500);
// Confetti effect on page load
function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = ["#ffb6c1", "#ffd6e8", "#fff0f5", "#ffe4e1"][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

window.onload = launchConfetti;
const loveNotes = ["You’re the best 💖", "Stay happy always 🌸", "Love you loads 🐻", "Hugsss 🤗"];
document.body.addEventListener("click", (e) => {
  const note = document.createElement("div");
  note.textContent = loveNotes[Math.floor(Math.random() * loveNotes.length)];
  note.style.position = "absolute";
  note.style.left = e.clientX + "px";
  note.style.top = e.clientY + "px";
  note.style.fontSize = "16px";
  note.style.background = "#fff0f6";
  note.style.padding = "5px 10px";
  note.style.borderRadius = "20px";
  note.style.border = "1px solid pink";
  note.style.opacity = 1;
  note.style.transition = "all 1.5s ease";
  document.body.appendChild(note);

  setTimeout(() => {
    note.style.transform = "translateY(-50px)";
    note.style.opacity = 0;
  }, 50);
  setTimeout(() => note.remove(), 2000);
});
// Gift Box Click Event
document.getElementById("giftBox").addEventListener("click", function() {
  const intro = document.getElementById("giftIntro");

  // Play a "pop" sound (optional)
  const popSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_4dcbba7f9f.mp3");
  popSound.play();

  // Animate fade out
  intro.style.animation = "fadeOutGift 1s forwards";

  // Show the first section after fade out
  setTimeout(() => {
    intro.style.display = "none";
    document.getElementById("section1").classList.remove("hidden");
  }, 1000);
});

// Fireworks setup
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.color = color;
    for (let i = 0; i < 50; i++) {
      this.particles.push(new Particle(x, y, color));
    }
  }
  update() {
    this.particles.forEach(p => p.update());
  }
  draw() {
    this.particles.forEach(p => p.draw());
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 3 + 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.alpha = 1;
    this.decay = Math.random() * 0.02 + 0.01;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= this.decay;
  }
  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    if (fw.particles[0].alpha <= 0) fireworks.splice(i, 1);
  });
  requestAnimationFrame(animateFireworks);
}
animateFireworks();

function triggerFireworks() {
  for (let i = 0; i < 5; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * (canvas.height / 2);
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    fireworks.push(new Firework(x, y, color));
  }
}

function cutCake() {
  const cakeMsg = document.getElementById("cakeMsg");
  cakeMsg.style.display = "block";

  // Trigger fireworks
  triggerFireworks();

  // Optional: keep triggering for 3 seconds
  const fireworkInterval = setInterval(triggerFireworks, 500);
  setTimeout(() => clearInterval(fireworkInterval), 3000);
}

const emojiList = ["🎂", "🎈", "💖", "🍫", "🎉", "🍭", "🌸", "🐻"];

function createEmojiRain() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.animationDuration = (3 + Math.random() * 4) + "s"; // random speed
  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 7000); // remove after fall
}

// Generate emoji rain occasionally (every 700ms)
setInterval(createEmojiRain, 700);

// IntersectionObserver: add 'glow' class when image enters viewport
const imgs = document.querySelectorAll('.memory-lane .slide img, .slide img');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('glow');
      // keep the glow for a while, then remove to save CPU/memory if you want:
      setTimeout(() => entry.target.classList.remove('glow'), 8000);
    } else {
      // optional: remove when out of view
      // entry.target.classList.remove('glow');
    }
  });
}, { threshold: 0.45 });

imgs.forEach(img => io.observe(img));

function openLetter(type) {
    let note = "";
    switch(type) {
        case 'sad':
            note = "Hyy betaa why r u feeling sad... is everything okyyyy???  ... I am here for u always bcha.. 💋 Tum kbbi bhi sad mat rehna tum haste hue hi ache lgte ho apni cutuuu cutu wali smile ke sthhh  kbhi bhi sad feel ho always remember I am there your family is there okyyy♥ Me hmesha sath hu tmhre tum bs haste rho or khush rho  .....🫶💖";
            break;
        case 'miss':
            note = "Aww Myyyyy kuchuuuuuu puchuuuu u miss me i misss u toooo my bbyyyyyy ... I know its little cringe for u 😂but still its my loveee yrrrr to express don't judge okyyy vrna thappd khaoge. Hnnn to u misss me right why u misss me vese to kbhi miss krte nhi joke apart just feel I am there I am near you beta...hm hmesha sth h me pass hi hu tnhare hmesha just close your eyes nd think about me our memories our journey we spent our everything.... Tumhe jb bbi meri yaad aaye muje call msg vc kuch bhi kr lena I'll alwys there for u bbyyy🥹😙💋❤nd hum jld hi milege. I love uuuu i missss u nd i cant wait tooooo kisssss uuuu soo hardddd heheehe🤭🤭🤭. 🥺💞";
            break;
        case 'sleep':
            note = "Wht happened ?? Why can't u sleep bbyy. I know tum kch soch rhe hoge overthink kr rhe hoge bht si chezo ko lekr ghr ko lekr mummy papa mujhe bhai ya career for let me tell u one thing don't overthink sb kuch thik hoga sb apne aap sahi ho jyega bby u r very strong tum sb kch handle kr lete ho or tension bikul mat lo kisi bhi cheez ki i am there for u alwaysss ab close your eyes 👀 think about me👉👈pta h nhi sochoge 😂fir bhi soch lena thoda sa🙂 Or achi achi bate socho or soo jao my cutuuuu ... some se sb thik ho jata h tumhi sula dete ho muje hmeshq yekehkr lo ab khud bhi try krlena heheehe👉👈 Im sending u all my peace .. Good night sweet dreams loveeeee uhuuhhhuu sooooo soooo muchhhhhhh💋💋💋💋or apna dhyn rakhnaaaaa💓🌙✨";
            break;
        case 'motivation':
            note = "Bhai me kya hi motivation du meri khud lnka lgi hui h  😂parrrr noooo stilll i have to motivate uuu hehe Look i know tum bht sochte ho apne career ko lekr baki chezo ko lekr nd thats obvious sochna chayie look at you yrr u r my everything bhai tum bht talented ho yrrrrr tumhe har ek cheez hi knowledge h itni syd kbhi kisi ho nhi hogi me khud shock ho jati hu yrrr ... Tunhare ander bht potential h beta u can do eveything U r the hardest working person i have ever met ♥♥kbhi bhi apne aap ko neeche mat smjna tum bht intelligent ho sb kuch ho nd remember tht success is waiting for u ....bcz u deserve it my bchaa❤♥💋u r my 🏆 champion. Just know i am right there cheering for u alwysss u r sooo strong.... 💪💖";
            break;
        case 'smile':
            note = "Hyyyy bchaaa, If u need to smile....Just apni aakhe band kroo or sochoo jb humne pehli bar apni first kiss thi vo jgh vo time vo moment yrrrr♥♥♥♥jungle me hi hui thi yrrrr just imagine hum ek lote honge jo jungle jate the bhai kya din the... u r my favorite person yrrr  Do u remember humne kitbi sari memories banai h yrrr humara us ganga ji pr hug krna or tumhara vo mujhe uthana yrrrr kissa krna or hamara coaching me sth jama or aana or kbhi kbi ladai ho jane pr mera cycle lekr furrrr se nikal jana yr. U r my sunshine my safe place...❤i hope this reminds u that someone love u sooo madlyyy yrr chlo ab jldi se smileee krdooooo jb tum haste ho to bht ache lgte ho tmhari smile world ki bestttttt smileeeee yr bachaaaa💋💋💋 😘";
            break;
    }
    document.getElementById('noteText').innerText = note;
    document.getElementById('letterContent').classList.remove('hidden');
}

function closeLetter() {
    document.getElementById('letterContent').classList.add('hidden');
}