const AGE_INPUT_ID = "inputAge";
const RESTING_INPUT_ID = "inputResting";
const OUTPUT_RESERVE_ID = "outputReserve";
const OUTPUT_HFPEAK_ID = "outputHFPeak";

const MIN_INPUT_ID = "inputPercent1";
const MAX_INPUT_ID = "inputPercent2";
const OUTPUT_FREQ_MIN = "outputFreqMin";
const OUTPUT_FREQ_MAX = "outputFreqMax";
const OUTPUT_BORG_MIN = "outputBorgMin";
const OUTPUT_BORG_MAX = "outputBorgMax";

let age = NaN;
let reserve = NaN;
let resting = NaN;
let min = NaN;
let max = NaN;

calcReserve();
calcBorg();

function calcReserve() {
    readAge();
    readResting();
    let hfpeak = 209 - 0.72 * age;
    reserve = hfpeak - resting;
    document.getElementById(OUTPUT_HFPEAK_ID).innerHTML = hfpeak;
    document.getElementById(OUTPUT_RESERVE_ID).innerHTML = reserve;
}

function calcBorg() {
    readMinMax();
    let freqMin = ((min * reserve) / 100.0) + resting;
    let freqMax = ((max * reserve) / 100.0) + resting;

    let borgMin = Math.round(freqMin * 0.1);
    let borgMax = Math.round(freqMax * 0.1);

    document.getElementById(OUTPUT_FREQ_MIN).innerHTML = Math.round(freqMin * 100) / 100;
    document.getElementById(OUTPUT_FREQ_MAX).innerHTML = Math.round(freqMax * 100) / 100;
    document.getElementById(OUTPUT_BORG_MIN).innerHTML = borgMin;
    document.getElementById(OUTPUT_BORG_MAX).innerHTML = borgMax;
}

function readAge() {
    age = parseFloat(document.getElementById(AGE_INPUT_ID).value);
}

function readResting() {
    resting = parseFloat(document.getElementById(RESTING_INPUT_ID).value);
}

function readMinMax() {
    min = parseFloat(document.getElementById(MIN_INPUT_ID).value);
    max = parseFloat(document.getElementById(MAX_INPUT_ID).value);
}

