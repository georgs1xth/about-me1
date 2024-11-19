function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const indusImage = document.getElementById('indus-image');
const heroImage = document.getElementById('hero-image');
const indusPohorony = document.getElementById('indus-pohorony');
// TODO: Create childrens for hero-image and append them
let foodCounter = 0;
function feedTheIndus()
{
    if (foodCounter == 20)
    {
        indusPohorony.innerHTML += ': Overfed!'
        indusImage.classList.add('grayscale');
        indusPohorony.classList.remove('hidden');
        foodCounter++;
        return;
    }
    else if (foodCounter > 20)
    {
        return;
    }
    
    foodCounter++;
    const food = document.createElement('div');
    
    leftAlign = ['left-[128px]', 'left-[132px]', 'left-[136px]', 'left-[140px]', 'left-[144px]'];
    topAlign = ['top-[156px]', 'top-[160px]', 'top-[164px]', 'top-[168px]', 'top-[172px]'];

    food.classList.add(leftAlign[getRandomInt(0, 4)]);
    food.classList.add(topAlign[getRandomInt(0, 4)]);

    food.classList.add('absolute', 'w-24', 'h-24', 'transition-all', 'border-none', 'text-white', 'bg-white/10', 'rounded-full');
    //TODO: Assign inner html for food: svg
    randomPic = getRandomInt(0, 4);
    switch (randomPic) {
        case 0:
            food.innerHTML = `
            <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg class="w-full h-full" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet"><path d="M24.25 82.44s-7.09-10.51-7.23-16.52c-.08-3.32 1.6-7.13 4.88-9.1s7.79-3.28 7.79-3.28l72.08.19s5.59-.3 8.07 6.38c2.16 5.82-2.63 16.71-2.63 16.71s-36.88 13.5-46.83 12.75s-36.13-7.13-36.13-7.13z" fill="#fbb75a"></path><path d="M45.65 57.19l-18.02-3.1s-2.91 1.13-3.94 1.69c-1.03.56-1.78 1.03-1.78 1.03s15.96 15.34 41.76 14.73c36.04-.84 42.56-16.42 42.56-16.42s-1.22-1.1-2.96-1.43c-2.79-.53-6.85-.16-6.85-.16l-50.77 3.66z" fill="#cf6e21"></path><path d="M19.74 75.21l-.45-2.98s.72-.32 3.61.89c7.52 3.14 22.59 8.96 38.06 8.96c20.05 0 35.45-6.5 43.15-10.57c3.52-1.86 4.93-2.24 4.93-2.24l-1.83 9.13l-45.33 14.92l-38.95-11.54l-3.19-6.57z" fill="#cf6e21"></path><path d="M32.69 78.59l-9.2-1.03l-5.4-3.43s4.42 8.24 5.17 12.18s5.38 25.97 5.38 25.97s6.33 11.61 34.16 11.54c29.89-.07 39.51-13.05 39.51-13.05l2.87-24.33l2.01-7.07l2.16-8.39l-10.32 5.54l-7.32 4.97h-8.54l-8.73 3.66l-9.76-.84l-7.04 3.19l-9.57-4.13l-7.79.94l-7.59-5.72z" fill="#a9e7ff"></path><path d="M40.67 88.16c-3.57-.52-3.57 4.32-3.1 8.26c.47 3.94 2.21 23.85 2.21 23.85s1.38.68 3.45 1.23c1.67.45 3.92.92 3.92.92s-1.97-23.28-2.06-25.43s-.57-8.27-4.42-8.83z" fill="#4ec0f5"></path><path d="M58.03 91.82c-2.81-.13-4.32 2.35-3.94 7.79s1.31 23.93 1.31 23.93s1.68.26 3.55.35c1.88.09 3.86-.07 3.86-.07l-.75-23.46c-.09-2.81.01-8.35-4.03-8.54z" fill="#4ec0f5"></path><path d="M24.25 82.44c-2.07.07-1.78 2.18-.94 5.84c.84 3.66 3 15.56 3.38 17.43c.38 1.88 1.31 6.19 1.31 6.19s1.4 1.75 2.1 2.38c.83.75 2.22 1.83 2.22 1.83S28.47 90.32 28 87.97c-.47-2.34-1.13-5.63-3.75-5.53z" fill="#4ec0f5"></path><path d="M75.58 90.88c-4.61.1-4.04 6.57-4.04 7.98c0 1.41.28 24.5.28 24.5s2.44-.19 3.75-.38s3.65-.63 3.65-.63s.11-21.99.11-24.05c.01-2.07.67-7.51-3.75-7.42z" fill="#4ec0f5"></path><path d="M91.45 85.63c-3.73.29-3.94 4.5-4.04 9.01c-.09 4.5-.26 25.53-.26 25.53s2.18-.79 3.45-1.31c1.58-.66 2.82-1.36 2.82-1.36s.94-22.38.94-24.54s.83-7.63-2.91-7.33z" fill="#4ec0f5"></path><path d="M99.54 113.51c.81-.6 2.79-2.73 2.79-2.73s2.82-17.64 3.19-20.37c.38-2.72 1.76-11.11 1.76-11.11s-.94-.47-2.25 0s-3.03 2.59-3.31 7c-.28 4.42-2.18 26.83-2.18 27.21z" fill="#4ec0f5"></path><path d="M99.7 77.18c-3.85 1.69-8.26 7.13-8.26 7.13s-3.75-2.83-8.07-1.69c-4.97 1.31-7.79 6.66-7.79 6.66s-5.44-3.85-9.1-3.66c-3.66.19-8.26 4.5-8.26 4.5s-5.91-4.41-9.48-4.97c-3.57-.56-8.26 1.41-8.26 1.41s-4.6-5.54-8.63-6.57s-7.41 1.13-7.41 1.13s-1.97-3.66-3.85-4.69s-3.64-.88-3.19-3.28c.28-1.5 2.56-1.26 3.75-.75c3.28 1.41 4.13 4.22 4.13 4.22s2.25-1.5 7.51-.38c5.78 1.24 8.54 6.01 8.54 6.01s3.28-1.95 7.23-1.69c5.63.38 9.01 5.16 9.01 5.16s3.94-4.04 8.63-4.22s8.54 2.53 8.54 2.53s1.13-3.57 8.07-5.16c5.37-1.23 8.45 1.03 8.45 1.03s1.88-4.41 7.04-6.1c4.12-1.35 6.38-.38 6.38-.38s.19-3.38 3.1-4.32c1.33-.43 2.52.06 2.3 1.5c-.19 1.22-1.44.41-2.39 2.44c-.7 1.5-1.5 4.04-1.5 4.04s-3.33-1.29-6.49.1z" fill="#d9eff2"></path><path d="M61.6 3.97c-.48.79 1.13 4.6-.84 7.98c-1.97 3.38-5.91 5.44-10.61 5.63s-6.92 1.22-9.2 3.47c-2.54 2.51-2.53 6.19-2.53 6.19s-4.02 1.49-5.54 4.97c-1.6 3.66-.56 6.66-.56 6.66s-5.88 1.83-7.23 7.23c-1.03 4.13-.48 7.38 2.05 9.54s21.13 10.73 39.43 9.14s36.6-12.29 36.7-15.2c.09-2.91.56-7.51-3.57-9.85c-4.13-2.35-6.95-2.06-6.95-2.06s1.41-6.29.19-8.35s-2.63-3.38-4.97-4.6c-2.35-1.22-3.47-1.13-3.47-1.13s.33-5.19-2.31-6.9c-2.25-1.46-4.63-2.3-10.45-4.83c-4.33-1.89-5.82-4.41-6.66-5.44c-.85-1.04-2.92-3.38-3.48-2.45z" fill="#ffe9c8"></path><path d="M46.11 29.41c-.21.73 3.78 3.01 8.63 3.85c6.01 1.03 18.32.43 25.53-2.53c6.85-2.82 6.84-6.47 6.29-8.92c-.84-3.75-4.41-5.07-4.41-5.07s-1.78 3.38-4.6 4.6c-2.82 1.22-9.64 3.28-14.55 4.32c-5.34 1.12-16.7 3.09-16.89 3.75z" fill="#ffcb86"></path><path d="M37.48 44.99c0 .77 7.49 3.95 17.83 5.35c16.61 2.25 29.75-2.06 34.54-5.63s5.35-5.73 5.16-9.57s-2.06-5.82-2.06-5.82s-1.03 2.82-4.04 5.54c-3 2.72-10.14 5.35-16.99 6.85c-6.85 1.5-14.83 2.25-20.08 2.72c-4.68.41-14.36-.19-14.36.56z" fill="#ffcb86"></path><path d="M102.99 43.49s.84 2.82.84 4.97c0 2.16-.66 4.69-1.31 5.73c-.66 1.03-7.88 10.98-28.81 13.14s-32.1-2.25-37.92-5.16s-10.14-7.23-10.14-8.26c0-1.14 3.66 2.25 9.2 4.13c3.99 1.35 20.46 6.38 37.54 2.53s24.78-8.73 27.12-11.36s2.92-4.97 3.48-5.72z" fill="#ffcf86"></path><path d="M40.06 34.57c1.45 2.03 2.67 4.29 4.43 3.24c1.76-1.06.35-3.17-.99-5.21s-2.75-4.29-4.43-3.1c-1.68 1.2-.06 3.59.99 5.07z" fill="#a681cb"></path><path d="M68.01 24.93c-1.18.87-.72 2.75 1.37 5.56c2.04 2.75 3.48 4.58 4.96 3.52c1.6-1.15.39-3.27-1.51-5.88s-3.24-4.36-4.82-3.2z" fill="#49c0f5"></path><path d="M77.79 52.03c-1.09 2.59-2.72 5.74-.53 6.41c2.32.7 2.99-2.53 4.19-5.07c1.2-2.53 1.72-4.34.21-5.07c-1.9-.92-2.74 1.05-3.87 3.73z" fill="#a681cb"></path><path d="M45.06 41.82c-1.27 2.6-2.35 5.04-.63 5.84c1.97.92 2.89-.7 4.26-3.63c1.22-2.59 2.15-4.75.53-5.46c-2.1-.9-3.07 1.01-4.16 3.25z" fill="#ed4889"></path><path d="M42.88 55.27c-1.55 1.55.07 3.17 1.76 4.58c1.69 1.41 4.22 3.1 5.56 1.62c1.5-1.66-1.48-3.21-3.06-4.5c-1.98-1.63-2.92-3.05-4.26-1.7z" fill="#72e38d"></path><path d="M68.78 7.54c-2.11-.21-2.04 3.1-1.97 5s0 4.01 1.9 4.08c1.97.07 1.83-2.53 1.76-4.58c-.07-2.04.35-4.3-1.69-4.5z" fill="#72e38d"></path><path d="M77.72 27.67c-1.17.68-1.13 2.39.77 5.56c1.68 2.81 3.24 5 5.07 3.87c2.21-1.36-.14-3.59-1.48-5.77s-2.04-5-4.36-3.66z" fill="#fd6660"></path><path d="M53.68 32.18c3.38 1.17 6.18-1.75 5.67-4.76c-.47-2.75-3.2-3.54-3.42-3.47s-4.44 2.41-4.73 2.64s-1.07 4.36 2.48 5.59z" fill="#ed4889"></path><path d="M61.67 54.1c2.67 1.83 6.55-.35 6.51-3.56c-.03-2.71-2.34-4-2.56-3.98c-.22.03-5 1.6-5.32 1.76c-.32.17-1.62 3.74 1.37 5.78z" fill="#ed4889"></path><path d="M91.9 50.35c2.63.59 5.22-1.92 4.4-4.8c-.69-2.43-3.05-3.02-3.24-2.94c-.19.08-3.8 2.44-4.04 2.66s-.93 4.23 2.88 5.08z" fill="#ed4889"></path><path d="M30.7 50.69c3 1.14 5.94-1.63 5.46-4.47c-.44-2.59-3.01-3.34-3.21-3.26c-.2.07-4.17 2.27-4.44 2.48c-.27.21-1.05 4.02 2.19 5.25z" fill="#ed4889"></path><path d="M53.29 24.29c-1.59.77-2.5 2.29-2.25 3.38c.24 1.05 2.5 1.69 4.5.77c2.07-.94 2.39-2.94 1.79-3.84c-.48-.73-2.59-1.01-4.04-.31z" fill="#ffa5aa"></path><path d="M30.03 43.37c-1.38.8-1.97 2.67-1.48 3.66c.74 1.47 2.83 1.78 4.47.77c1.9-1.16 2.04-3.52 1.37-4.19c-.66-.66-2.28-1.44-4.36-.24z" fill="#ffa5aa"></path><path d="M62.27 46.4c-1.61.6-2.56 2.18-2.22 3.45c.32 1.16 2.2 1.43 4.01.81c2.57-.88 2.96-2.89 2.43-3.55s-1.97-1.56-4.22-.71z" fill="#ffa5aa"></path><path d="M93.24 46.68c-1.51 1.29-3.88 1.05-4.27 0c-.4-1.08.33-2.65 1.41-3.44c1.08-.79 2.84-.97 3.75-.17c1.07.93.23 2.65-.89 3.61z" fill="#ffa5aa"></path></svg>
            `
            break;
        case 1:
            food.innerHTML = `
            <?xml version="1.0" encoding="utf-8"?>
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <svg class='h-full w-full' viewBox="0 -63.5 1151 1151" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M943.867059 602.696893c0 231.040946-186.533815 414.998578-477.577831 414.998577S6.291584 820.986377 6.291584 589.945431 175.258157 181.005416 466.289228 181.005416 943.867059 371.643 943.867059 602.696893z" fill="#ED8D37" /><path d="M466.289228 1023.987054c-139.722359 0-258.524553-44.623642-343.564503-129.068092C43.587991 816.351836 0 708.035615 0 589.945431c0-58.384864 10.576593-113.481534 31.432029-163.775369a376.148694 376.148694 0 0 1 91.435098-131.92908c83.797167-78.191703 202.560525-119.514205 343.422101-119.514205 71.472912 0 138.621979 11.366277 199.583026 33.788137 58.255408 21.412099 109.571949 52.39103 152.616222 92.082381 84.910493 78.334105 131.670167 185.562892 131.670167 302.099598 0 116.083609-46.785565 222.19907-131.721949 298.811403-42.953654 38.733373-94.309032 68.935566-152.629168 89.765111-60.8057 21.709849-127.928875 32.713648-199.518298 32.713647z m0-836.690054C194.922594 187.335837 12.647896 349.156413 12.647896 589.945431c0 248.155091 186.572652 421.471401 453.70606 421.471401 273.153133 0 471.286247-171.892289 471.286247-408.706994-0.064728-240.711344-198.26257-415.374002-471.350975-415.374001z" fill="#541018" /><path d="M1087.796753 76.00328a57.646962 57.646962 0 0 0-20.829545 3.883694 57.672853 57.672853 0 1 0-78.062246 37.218732l-122.181008 122.142172 49.271129 49.193455 123.449681-123.449682a57.672853 57.672853 0 1 0 48.351989-88.988371z" fill="#FFE692" /><path d="M915.995083 297.373829l-58.164788-58.125951 120.562802-120.523966a63.977383 63.977383 0 1 1 97.092346-54.734192 65.401404 65.401404 0 0 1-0.375424 6.938867 63.977383 63.977383 0 1 1-36.377265 103.746408z m-40.364525-58.125951l40.364525 40.364524 124.537116-124.485333 4.233226 6.472823a51.381269 51.381269 0 1 0 24.531999-75.900323l-11.858212 4.543922 3.482379-12.168908a51.381269 51.381269 0 1 0-69.582848 33.205583l8.557072 3.650672z" fill="#541018" /><path d="M735.429211 384.122603m-271.366634 0a271.366634 271.366634 0 1 0 542.733268 0 271.366634 271.366634 0 1 0-542.733268 0Z" fill="#ED8D37" /><path d="M735.429211 661.780821a277.658218 277.658218 0 1 1 196.35956-81.324549 275.806991 275.806991 0 0 1-196.35956 81.324549z m0-542.733268c-146.156345 0-265.062104 118.918705-265.062105 265.07505s118.90576 265.07505 265.062105 265.07505 265.07505-118.90576 265.07505-265.087995S881.598501 119.047553 735.429211 119.047553z" fill="#541018" /><path d="M283.936856 586.268868a294.176863 271.366634 90 1 0 542.733269 0 294.176863 271.366634 90 1 0-542.733269 0Z" fill="#ED8D37" /><path d="M66.21698 689.316211c33.166745 111.953948 131.113504 190.184487 240.297083 222.186124a499.391245 499.391245 0 0 0 102.620137 18.214524c9.061952 0.699065 9.061952-13.463472 0-14.149591-112.148132-8.531181-225.176569-55.420311-290.836886-150.311897a279.781304 279.781304 0 0 1-38.47446-79.706343c-2.589129-8.71242-16.259732-5.009965-13.657657 3.767183zM462.483208 927.826795A414.390132 414.390132 0 0 0 634.33666 895.773375c8.272268-3.469433 4.634541-17.178872-3.767183-13.644711a404.460822 404.460822 0 0 1-168.086269 31.535594c-9.061952-0.245967-9.061952 13.903624 0 14.162537z" fill="#541018" /></svg>
            `
            break;
        default:
            food.innerHTML = `
        <?xml version="1.0" ?>

        <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
        <svg class="relative w-full h-full bottom-1" viewBox="0 0 47.5 47.5" id="svg2" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg">

        <defs id="defs6">

        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath16">

        <path d="M 0,38 38,38 38,0 0,0 0,38 Z" id="path18"/>

        </clipPath>

        </defs>

        <g id="g10" transform="matrix(1.25,0,0,-1.25,0,47.5)">

        <g id="g12">

        <g clip-path="url(#clipPath16)" id="g14">

        <g id="g20" transform="translate(36.3369,13.4512)">

        <path d="m 0,0 c -1.046,-6.271 -7.722,-10.451 -17.245,-10.451 -9.523,0 -16.198,4.18 -17.243,10.451 -0.247,1.479 0.156,8.12 1.054,9.406 2.559,3.663 3.474,-10.365 16.189,-10.365 13.848,0 13.641,14.028 16.199,10.365 C -0.147,8.12 0.246,1.479 0,0" id="path22" style="fill:#ffac33;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g24" transform="translate(19.0923,17.6309)">

        <path d="m 0,0 c -3.174,0 -5.748,0.702 -5.748,1.568 0,0.866 2.574,1.567 5.748,1.567 3.173,0 5.748,-0.701 5.748,-1.567 C 5.748,0.702 3.173,0 0,0 m 0,13.375 c -9.331,0 -16.895,-4.584 -16.895,-10.24 0,-5.655 7.564,-10.239 16.895,-10.239 9.33,0 16.895,4.584 16.895,10.239 0,5.656 -7.565,10.24 -16.895,10.24" id="path26" style="fill:#8a4b38;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g28" transform="translate(2.7197,22.3774)">

        <path d="m 0,0 c -0.653,-1.045 -0.92,-5.494 0.479,-7.577 2.134,-3.179 3.178,-1.567 4.746,-2.047 2.335,-0.714 2.508,-2.559 4.355,-3.483 2.09,-1.045 3.305,-0.741 6.27,0 4.181,1.045 6.837,-1.088 9.405,0 2.106,0.893 3.311,4.137 4.486,4.528 3.728,1.243 4.515,7.124 1.741,9.537 -0.87,-1.829 -5.137,-8.404 -7.88,-8.709 -2.745,-0.305 -10.974,-1 -14.457,0.784 C 5.661,-5.182 2.134,-2.961 1.698,-2.352 1.263,-1.742 0,0 0,0" id="path30" style="fill:#8a4b38;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g32" transform="translate(19.0923,23.1177)">

        <path d="m 0,0 c -3.752,0 -6.793,-1.228 -6.793,-2.743 0,-0.59 0.463,-1.133 1.245,-1.58 -0.126,0.13 -0.2,0.264 -0.2,0.404 0,0.866 2.574,1.567 5.748,1.567 3.173,0 5.748,-0.701 5.748,-1.567 0,-0.14 -0.074,-0.274 -0.201,-0.404 0.783,0.447 1.246,0.99 1.246,1.58 C 6.793,-1.228 3.751,0 0,0" id="path34" style="fill:#f4900c;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g36" transform="translate(5.4199,18.8496)">

        <path d="M 0,0 C -0.375,0 -0.737,0.203 -0.925,0.557 -1.195,1.067 -1,1.7 -0.489,1.969 l 2.308,1.22 C 2.328,3.461 2.961,3.265 3.231,2.754 3.501,2.244 3.306,1.611 2.795,1.342 L 0.487,0.122 C 0.332,0.039 0.165,0 0,0" id="path38" style="fill:#f4abba;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g40" transform="translate(17.3071,11.0557)">

        <path d="m 0,0 c -0.41,0 -0.799,0.242 -0.966,0.646 l -0.74,1.786 C -1.927,2.965 -1.673,3.576 -1.14,3.797 -0.606,4.017 0.004,3.765 0.225,3.23 L 0.965,1.444 C 1.186,0.911 0.933,0.3 0.399,0.079 0.269,0.025 0.133,0 0,0" id="path42" style="fill:#f4abba;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g44" transform="translate(29.1514,15.2363)">

        <path d="M 0,0 C -0.181,0 -0.364,0.047 -0.53,0.146 -1.027,0.438 -1.192,1.08 -0.898,1.576 L 0.233,3.492 C 0.526,3.988 1.171,4.153 1.664,3.86 2.161,3.566 2.326,2.926 2.032,2.429 L 0.9,0.514 C 0.706,0.184 0.357,0 0,0" id="path46" style="fill:#55acee;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g48" transform="translate(30.8926,23)">

        <path d="m 0,0 c -0.56,0 -1.023,0.481 -1.043,1.046 -0.02,0.576 0.431,1.079 1.007,1.1 L 1.182,2.198 C 1.769,2.205 2.243,1.771 2.263,1.194 2.283,0.618 1.832,0.099 1.256,0.078 L 0.038,0 0,0 Z" id="path50" style="fill:#f4abba;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g52" transform="translate(20.792,27.1235)">

        <path d="m 0,0 c -0.444,0 -0.855,0.285 -0.997,0.73 -0.173,0.551 0.132,1.138 0.682,1.312 L 0.511,2.303 C 1.066,2.478 1.648,2.172 1.822,1.622 1.997,1.071 1.691,0.484 1.142,0.31 L 0.315,0.049 C 0.21,0.016 0.104,0 0,0" id="path54" style="fill:#f4abba;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g56" transform="translate(14.9976,25.4258)">

        <path d="M 0,0 C -0.157,0 -0.316,0.036 -0.466,0.11 L -1.25,0.502 C -1.766,0.76 -1.976,1.388 -1.718,1.904 -1.46,2.42 -0.832,2.63 -0.315,2.372 L 0.468,1.98 C 0.984,1.722 1.194,1.095 0.936,0.578 0.753,0.212 0.384,0 0,0" id="path58" style="fill:#88c9f9;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g60" transform="translate(24.0996,12.1465)">

        <path d="M 0,0 C -0.156,0 -0.315,0.035 -0.465,0.109 L -1.249,0.5 c -0.517,0.258 -0.727,0.885 -0.47,1.401 0.257,0.518 0.884,0.727 1.402,0.47 L 0.467,1.98 C 0.983,1.723 1.193,1.096 0.937,0.579 0.754,0.212 0.384,0 0,0" id="path62" style="fill:#88c9f9;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g64" transform="translate(10.4263,14.4521)">

        <path d="m 0,0 c -0.138,0 -0.277,0.026 -0.412,0.085 -0.53,0.227 -0.775,0.842 -0.548,1.372 l 0.392,0.914 C -0.34,2.9 0.275,3.15 0.805,2.919 1.335,2.691 1.581,2.077 1.353,1.547 L 0.961,0.633 C 0.791,0.237 0.405,0 0,0" id="path66" style="fill:#55acee;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g68" transform="translate(26.0176,24.3369)">

        <path d="m 0,0 c -0.403,0 -0.787,0.234 -0.958,0.626 -0.231,0.529 0.01,1.145 0.538,1.377 L 0.276,2.308 C 0.807,2.54 1.422,2.298 1.652,1.769 1.884,1.24 1.643,0.624 1.114,0.393 L 0.418,0.088 C 0.281,0.028 0.14,0 0,0" id="path70" style="fill:#55acee;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        <g id="g72" transform="translate(9.0347,24.3804)">

        <path d="m 0,0 c -0.078,0 -0.157,0.009 -0.235,0.027 l -0.566,0.13 c -0.563,0.13 -0.914,0.691 -0.784,1.253 0.129,0.563 0.691,0.913 1.252,0.784 L 0.233,2.064 C 0.796,1.934 1.147,1.373 1.018,0.811 0.906,0.327 0.476,0 0,0" id="path74" style="fill:#55acee;fill-opacity:1;fill-rule:nonzero;stroke:none"/>

        </g>

        </g>

        </g>

        </g>

        </svg>
        `;

            break;
    }           
    


    heroImage.appendChild(food);

    food.classList.add('opacity-0');
    // TODO: Make it fade away in 1000 ms and remove it after 2 seconds
    setTimeout(() => {
        food.classList.remove('opacity-0');
        setTimeout(() => {
            food.classList.add('duration-1000')
            food.classList.add('opacity-0');
            setTimeout(() => {
                heroImage.removeChild(food);
            }, 1000);
        }, 2000);
    }, 1000);
}        

const feedBtn = document.getElementById("feed-btn");

// TODO: onclick of feedBtn call the feedTheIndus function
feedBtn.onclick = feedTheIndus;

// TODO: Hero section

let i = 0;
let txt = "// Hey, it’s"; /* The text */
let speed = 100; /* The speed/duration of the effect */

let heroCode = document.getElementById("hero-code");

function typeWriter() 
{
    let j = 0;
    let txt2 = "Hello, I'm";
    function typeWriter2() {
        if (j == 0)
        {
            heroCode.innerHTML = txt2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        }
        else if (j < txt2.length) {
            heroCode.innerHTML += txt2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        }
        else
        {

            setTimeout(typeUnWriter, 1000);
        }
    }
    setTimeout(typeWriter2, 500);

    let h = heroCode.innerHTML.length;
    function typeUnWriter() {             
        if (h > 0) {
            heroCode.innerHTML = heroCode.innerHTML.slice(0, -1);
            h--;
            setTimeout(typeUnWriter, speed);
        }
        else{
            typeWriterCorrect();
        }
    }
}

function typeWriterCorrect() {
    if (i < txt.length) 
    {
        heroCode.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterCorrect, speed);
    }
    else
    {
        addPipe(5);
    }
}

function addPipe(pipeCount) {
    function addAndRemovePipe(count) {
        if (count > 0) {
            heroCode.innerHTML += "|";
            setTimeout(() => {
                heroCode.innerHTML = heroCode.innerHTML.slice(0, -1);
                setTimeout(() => {

                    addAndRemovePipe(count - 1);
                }, 500)
            }, 500);
        }
    }
    addAndRemovePipe(pipeCount);
}

// Works a second after loading the website
setTimeout(typeWriter, 1000);

// About me section
aboutSoftware = document.getElementById("about-software");
aboutCompsci = document.getElementById("about-compsci");
aboutHobbies = document.getElementById("about-hobbies");

let isShown = false;
window.addEventListener("scroll", function(){
    let value = window.scrollY;
    console.log(value)
    if(value > 200 && !isShown)
    {
        aboutSoftware.classList.remove("top-48");
        aboutSoftware.classList.add("top-0");
        aboutCompsci.classList.remove("top-60");
        aboutCompsci.classList.add("top-0");
        aboutHobbies.classList.remove("top-72");
        aboutHobbies.classList.add("top-0");
        isShown = True;
    }
    
})

// About me - Software Developer section

aboutMeSoftwareIcon = document.getElementById('about-me-software-icon')

// TODO: make particles (aboutMeSoftwareIcon) look like particles        

aboutMeSoftwareIcon.classList.add("rotate-[5deg]");

function animateParticles() {
    if (aboutMeSoftwareIcon.classList.contains("rotate-[5deg]"))
    {
        aboutMeSoftwareIcon.classList.remove("rotate-[5deg]");
        aboutMeSoftwareIcon.classList.add("opacity-20");
    }
    else
    {
        aboutMeSoftwareIcon.classList.remove("opacity-20");
        aboutMeSoftwareIcon.classList.add("rotate-[5deg]");
    }
    setTimeout(
        animateParticles, 1000
    )
}
animateParticles();


// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

