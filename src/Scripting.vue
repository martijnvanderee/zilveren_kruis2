<template>
    <div class="main-placeholder">
        <div class="container my-3">
            <div class="row">
                <div class="col">
                    <h1>Scripting</h1>
                    <p>
                        Wij maken veel gebruik van herbruikbare utilities. Die
                        getallen om kan zetten naar bedragen of productnamen in
                        teksten kan plaatsen. Hieronder vind je een aantal
                        opdrachten waarbij je utilities moet maken. Zorg ervoor
                        dat alle functies argumenten kunnen ontvangen. Het
                        resulaat mag je loggen.
                    </p>

                    <div class="mb-5">
                        <p>Verwijder alle dubbele waardes uit de array</p>
                        <code>
                            const arr = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]
                        </code>

                        <p>
                            <span
                                >input: [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]
                            </span>
                            <span>
                                result:
                                {{
                                    removeDouble([
                                        1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5
                                    ])
                                }}
                            </span>
                        </p>

                        <p>
                            <span
                                >input: [1, 2, 10, 3, 2, 9, 0, 5, 9, 1, 8, 8]
                            </span>
                            <span>
                                result:
                                {{
                                    removeDouble([
                                        1, 2, 10, 3, 2, 9, 0, 5, 9, 1, 8, 8
                                    ])
                                }}
                            </span>
                        </p>
                    </div>

                    <div class="mb-5">
                        <p>
                            Schrijf een util functie die een getal omzet naar
                            een financiele notatie
                        </p>
                        <code>Resultaat: € 108,25</code>
                        <p>
                            <span>input : 4 & euro, </span>
                            <span>result : {{ priceMarkup(4) }} </span>
                        </p>
                        <p>
                            <span>input : 5.2 & dollar, </span>
                            <span
                                >result : {{ priceMarkup(5.2, 'dollar') }}
                            </span>
                        </p>
                        <p>
                            <span>input : 5.25 & yen, </span>
                            <span
                                >result : {{ priceMarkup(5.25, 'yen') }}
                            </span>
                        </p>

                        <p>
                            <span>input : 15.25, </span>
                            <span>result : {{ priceMarkup(15.25) }} </span>
                        </p>
                    </div>

                    <div class="mb-5">
                        <p>
                            Schrijf een util functie waar je jouw naam in de
                            volgende zin kunt plaatsen
                        </p>
                        <code>Hallo, mijn naam is #naam</code>

                        <p>
                            input: Martijn, result:
                            {{ helloMessage('Martijn') }}
                        </p>
                        <p>input: Robin, result: {{ helloMessage('Robin') }}</p>
                        <p>input: Max, result: {{ helloMessage('Max') }}</p>
                        <p>input: Ad, result: {{ helloMessage('Ad') }}</p>
                        <p>
                            input: Robin1332, result:
                            {{ helloMessage('Robin1332') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { helloMessage, priceMarkup, removeDouble } from './util/functions.js';
export default {
    name: 'ZkScripting',
    methods: {
        helloMessage,
        priceMarkup,
        removeDouble
    }
};
</script>

<style lang="scss"></style>
