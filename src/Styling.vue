<template>
    <div class="container my-3">
        <div class="row">
            <div class="col">
                <h1>Styling</h1>

                <h2>Uitlijnen</h2>

                <div class="d-flex mb-5">
                    <ul>
                        <li>
                            Hieronder vind je 3 producttegels, zorg ervoor dat
                            deze op desktop naast elkaar staan en op mobiel
                            onder elkaar
                        </li>
                        <li>
                            Style de producttegel zoals de afbeelding hiernaast
                        </li>
                        <li>
                            De producttegel heeft een minimale hoogte van 500px
                            en ze zijn allemaal even hoog
                        </li>
                        <li>
                            De kiesknop wordt bij hover groter en krijgt een
                            transparante achtergrond met een paarse omlijning
                        </li>
                        <li>
                            Elke knop moet een groen focus state krijgen van 2px
                            dik
                        </li>
                        <li>
                            Elke 2e knop moet blauw (#0068bd) zijn inclusief de
                            kleuren van de hover state
                        </li>
                    </ul>

                    <img
                        class="pl-4"
                        height="550"
                        src="./assets/images/product-tile.png"
                    />
                </div>

                <div class="product-tegels">
                    <h3>Product tegels</h3>

                    <div class="d-sm-flex">
                        <div
                            class="product-tegel position-relative p-4 container container-product-tegel"
                        >
                            <div>
                                <h5>Product</h5>
                                <hr class="mb-3 mt-4" />
                                <dl>
                                    <dt class="font-weight-normal">
                                        Vergoeding 1
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 2
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 3
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                </dl>
                            </div>

                            <div>
                                <h4 class="text-center">€0,00</h4>
                                <button class="btn btn-block btn-product-tegel">
                                    Kies
                                </button>
                            </div>
                        </div>

                        <div
                            class="product-tegel position-relative p-4 container container-product-tegel"
                        >
                            <div>
                                <h5>Product</h5>
                                <hr class="mb-3 mt-4" />
                                <dl>
                                    <dt class="font-weight-normal">
                                        Vergoeding 1
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 2
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 3
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 4
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 5
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                </dl>
                            </div>

                            <div class="absolute-bottom">
                                <h4 class="text-center">€0,00</h4>
                                <button class="btn btn-block btn-product-tegel">
                                    Kies
                                </button>
                            </div>
                        </div>

                        <div
                            class="product-tegel position-relative p-4 container container-product-tegel"
                        >
                            <div>
                                <h5>Product</h5>
                                <hr class="mb-3 mt-4" />
                                <dl>
                                    <dt class="font-weight-normal">
                                        Vergoeding 1
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 2
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 3
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                    <dt class="font-weight-normal">
                                        Vergoeding 4
                                    </dt>
                                    <dd class="font-weight-bold">
                                        Lorem ipsum dolor sit amet
                                    </dd>
                                    <hr class="mb-3 mt-4" />
                                </dl>
                            </div>
                            <div class="absolute-bottom">
                                <h4 class="text-center">€0,00</h4>
                                <button class="btn btn-block btn-product-tegel">
                                    Kies
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <h2>Animatie</h2>

                <p>
                    Op de website gebruiken wij iconen om verschillende
                    statussen weer te geven. Hieronder zijn een aantal
                    voorbeelden.
                </p>

                <p>Geef elk icoon een toepasselijke kleur.</p>

                <ul>
                    <li>
                        <span class="pr-2">
                            Dit icoon gebruiken wij bijvoorbeeld bij een
                            accordion om de richting aan te geven hoe deze open
                            klapt. Voor deze opdracht hoef je geen accordion te
                            maken, maar alleen ervoor te zorgen dat het icoon
                            met de punt naar boven staat wanneer de accordion
                            open is en met de punt naar beneden wanneer de
                            accordion gesloten is.
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                            width="16"
                            height="16"
                            class="arrow"
                        >
                            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                            />
                        </svg>
                    </li>
                    <li>
                        <span class="pr-2">
                            Dit is een spinner die wij gebruiken voor het
                            asynchroon laden van verschillende gegevens. Dit
                            icoon moet draaien, in faden om vervolgens na 5
                            seconden weer uit te faden. De duur van de fade mag
                            je zelf bepalen.
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 512 512"
                            class="loading-spinner"
                        >
                            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z"
                            />
                        </svg>
                    </li>
                    <li>
                        <span class="pr-2">
                            Zorg ervoor dat het hartje klopt.
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="16"
                            height="16"
                            class="heart-beat"
                        >
                            <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"
                            />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZkStyling'
};
</script>

<style lang="scss"></style>
