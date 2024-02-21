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

let reserve = NaN;
let resting = NaN;

function calcReserve() {
    let age = parseFloat(document.getElementById(AGE_INPUT_ID).value);
    resting = parseFloat(document.getElementById(RESTING_INPUT_ID).value);
    let hfpeak = 209 - 0.72 * age;
    reserve = hfpeak - resting;
    document.getElementById(OUTPUT_HFPEAK_ID).innerHTML = hfpeak;
    document.getElementById(OUTPUT_RESERVE_ID).innerHTML = reserve;
}

function calcBorg() {
    let min = parseFloat(document.getElementById(MIN_INPUT_ID).value);
    let max = parseFloat(document.getElementById(MAX_INPUT_ID).value);
    let freqMin = ((min * reserve) / 100.0) + resting;
    let freqMax = ((max * reserve) / 100.0) + resting;

    let borgMin = Math.round(freqMin * 0.1) * 10;
    let borgMax = Math.round(freqMax * 0.1) * 10;

    document.getElementById(OUTPUT_FREQ_MIN).innerHTML = freqMin;
    document.getElementById(OUTPUT_FREQ_MAX).innerHTML = freqMax;
    document.getElementById(OUTPUT_BORG_MIN).innerHTML = borgMin;
    document.getElementById(OUTPUT_BORG_MAX).innerHTML = borgMax;
}
