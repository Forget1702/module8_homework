async function loadImages() {
    try {
        const loader = document.querySelector('.loader');
        loader.style.display = 'block';

        const res = await fetch('https://dog.ceo/api/breeds/image/random/20');
        if (!res.ok) {
            throw new Error('Что-то пошло не так!');
        }
        const data = await res.json();
        loader.style.display = 'none';
        const string = data.message.map(image => `<img class="image" src="${image}" alt="Собака">`).join('');
        const images = document.querySelector('.images');
        if (images) {
            images.innerHTML = string;
        } else {
            throw new Error('Не найдены изображения');
        }
    } catch (e) {
        console.error(e.message);
    }
}
document.getElementById('loadBtn').addEventListener('click', loadImages);