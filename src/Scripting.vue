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
                                >value: [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5]
                            </span>
                            result:
                            {{
                                removeDouble([
                                    1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5
                                ])
                            }}
                        </p>
                    </div>

                    <div class="mb-5">
                        <p>
                            Schrijf een util functie die een getal omzet naar
                            een financiele notatie
                        </p>
                        <code>Resultaat: € 108,25</code>
                        <p>
                            <span>value : 4, currency: euro </span>
                            <span>, result : {{ priceMarkup(4) }} </span>
                        </p>
                        <p>
                            <span>value : 5.2, currency : dollar </span>
                            <span
                                >, result : {{ priceMarkup(5.2, 'dollar') }}
                            </span>
                        </p>
                        <p>
                            <span>value : 5.25 currency : yen </span>
                            <span
                                >, result : {{ priceMarkup(5.25, 'yen') }}
                            </span>
                        </p>
                    </div>

                    <div class="mb-5">
                        <p>
                            Schrijf een util functie waar je jouw naam in de
                            volgende zin kunt plaatsen
                        </p>
                        <code>Hallo, mijn naam is #naam</code>

                        <p>{{ helloMessage('Martijn') }}</p>
                        <p>{{ helloMessage('Robin') }}</p>
                        <p>{{ helloMessage('Robin') }}</p>
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
