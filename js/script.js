//? qr code generator app ------------------------------------------------------------------>

// access dom element ----------------------------->
const input = document.getElementById('input');
const qrCodeBox = document.getElementById('qr-code-box');
const loading = document.getElementById('loading');
const qrCode = document.getElementById('qr-code');
const qrGenerateBtn = document.getElementById('generate-btn');

// functions -------------------------------------->
const getInputValue = (inp) => {
    let inputValue = String(inp.value).trim().toLowerCase();
    return inputValue;
};

const inputValidation = (val) => {
    let inputValueFromGetInputValue = getInputValue(val);
    if (!inputValueFromGetInputValue || inputValueFromGetInputValue === '') {
        alert('Input field cannot be empty! Please put valid text or url.');
        return;
    };

    return inputValueFromGetInputValue;
};

const generateQRCode = (val) => {
    let generatedQRCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(val)}`;
    return generatedQRCode;
};

