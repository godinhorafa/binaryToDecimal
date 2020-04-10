function convert() {
        const binary = document.getElementById('bin-input').value;
        if (binary==='') {
            return alert('Please, enter a binary number');
        }
        binary.split('').map((char) => {
        if (char!=='0' && char!=='1') {
            return alert('Please, enter a binary number');
        }
        });
        const decimal = parseInt(binary, 2);
        document.getElementById('dec-input').value = decimal;
        return true;
}