// Puedes agregar aquí scripts personalizados si lo necesitas en el futuro.

const textoCarta = `
我曾经试图向你解释，但我没有表达好……结果只让你更加生气了。

我不知道这些话是否能传达给你，但我真的觉得有必要用心告诉你……

当我在那个群里和一些女生聊天时，我并没有恶意。对我来说，她们只是一起聊天、分享时光的人而已。
而那个我称为“女儿”的女孩，我是以一种关爱的方式称呼她，就像是一个需要被照顾的小妹妹。
但现在我明白了，这种称呼在你看来可能很奇怪，甚至让人不舒服。

我知道你觉得那样很恶心，我真的很抱歉让你有那样的感觉。
我从没想让你误会我，更没有想过要对你不尊重。

我理解在你的文化里，这样的行为可能会被看得很不同。
现在想想，我真的很难过自己没有早点意识到这一点。
你对我来说比我表现出来的更重要。
如果我能回到过去，我一定会在说出那些话之前停下来，不让你受伤。

这封信不是为了立刻让你原谅我，只是想让你知道，我现在真的明白你的感受。
如果有一天你愿意再和我说话，我会在这里，不是以前的我，而是一个更好的人`;

let i = 0;
const velocidad = 40;
const cartaElemento = document.getElementById("carta");

function escribirTexto() {
  if (i < textoCarta.length) {
    cartaElemento.textContent += textoCarta.charAt(i);
    i++;
    setTimeout(escribirTexto, velocidad);
  } else {
    cartaElemento.style.borderRight = 'none';
  }
}

escribirTexto();

function crearPetalo() {
  const petalo = document.createElement('img');
  petalo.src = 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Roses-PNG/Rose_Petal_Red_PNG_Clip_Art_Image.png?m=1629832907';
  petalo.classList.add('petalo');
  petalo.style.left = Math.random() * 100 + "vw";
  petalo.style.animationDuration = (Math.random() * 5 + 5) + "s";
  petalo.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.8})`;

  document.body.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 10000);
}

setInterval(crearPetalo, 300);

let siScale = 1;
let siBtnIsAbsolute = false;
let btnNoScale = 1;
let cartaContainer = document.getElementById('carta-container');
let btnNo = document.getElementById('btn-no');
let btnSi = document.getElementById('btn-si');


const frasesNo = [
 "你确定吗？😢",
"真的不要吗？💭",
"一点点也不可以吗？🥺",
"不想再考虑一下吗？🥺🌹",
"要不再想想看？🥺💭",
"来嘛，说好嘛！",
"你真的这么确定吗？😔"
];
let noClickCount = 0;

function respuestaSi() {

  window.location.href = "https://www.instagram.com/mar_kn17?igsh=a3lsMHQyZmZwdmE4";
}

function respuestaNo() {
  // Cambia el texto del botón "No" en cada click
  if (noClickCount < frasesNo.length) {
    btnNo.textContent = frasesNo[noClickCount];
  } else {
    btnNo.textContent = frasesNo[frasesNo.length - 1];
  }
  noClickCount++;

  // El botón "No" se achica un poco en cada click, pero nunca desaparece
  btnNoScale *= 0.85;
  btnNo.style.transition = 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)';
  btnNo.style.transform = `scale(${btnNoScale})`;

  // Solo la primera vez, haz el botón "Sí" absoluto y más abajo para no tapar el "No"
  if (!siBtnIsAbsolute) {
    btnSi.style.position = 'absolute';
    btnSi.style.left = '50%';
    btnSi.style.top = '92%'; // Mucho más abajo para no tapar el botón "No"
    btnSi.style.transform = `translate(-50%, -50%) scale(${siScale}, ${siScale})`;
    btnSi.style.zIndex = '2000';
    btnSi.style.width = 'auto';
    btnSi.style.height = 'auto';
    cartaContainer.style.position = 'relative';
    siBtnIsAbsolute = true;

    // Mueve el botón "No" mucho más arriba para que nunca quede tapado
    btnNo.style.position = 'absolute';
    btnNo.style.left = '50%';
    btnNo.style.top = '10%'; // Más arriba aún
    btnNo.style.transform = `translate(-50%, -50%) scale(${btnNoScale})`;

    // Oculta o achica el texto de la carta tras el primer click
    cartaElemento.style.transition = 'opacity 0.5s, transform 0.5s';
    cartaElemento.style.opacity = '0';
    cartaElemento.style.transform = 'scale(0.1)';
  }

  // Cada clic en "No" aumenta el tamaño del botón "Sí" (crece más en Y para móvil)
  siScale += 1.2;
  let scaleX = siScale;
  let scaleY = window.innerWidth < 700 ? siScale * 1.7 : siScale;
  btnSi.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
  btnSi.style.transform = `translate(-50%, -50%) scale(${scaleX}, ${scaleY})`;

  // Si es muy grande, haz que el botón "Sí" ocupe toda la pantalla antes de ocultar el popup
  if (siScale > 10) {
    btnSi.style.transition = 'all 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
    btnSi.style.left = '50%';
    btnSi.style.top = '50%';
    btnSi.style.width = '100vw';
    btnSi.style.height = '100vh';
    btnSi.style.borderRadius = '0';
    btnSi.style.transform = 'translate(-50%, -50%) scale(1,1)';
    btnSi.style.fontSize = '2.5em';
    btnSi.style.display = 'flex';
    btnSi.style.alignItems = 'center';
    btnSi.style.justifyContent = 'center';
    btnSi.style.pointerEvents = 'auto'; // Asegura que siga siendo clickeable

    // Oculta el botón "No" para que no quede tapado al final
    btnNo.style.opacity = '0';

    // No ocultes el botón "Sí" ni el popup hasta que el usuario haga click en "Sí"
    // El popup solo se cierra si el usuario pulsa "Sí"
  }
}
