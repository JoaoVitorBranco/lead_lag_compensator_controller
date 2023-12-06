
const differenceEquation = function(kc, zc, pc, t, y_ant, x_ant, x){
    const den = pc + 2 / t;
    const num1 = (2/t - pc) * y_ant;
    const num2 = (2 * kc / t + kc * zc) * x_ant;
    const num3 = (kc * zc - 2 * kc / t) * x;

    return (
        (num1 + num2 + num3) / den
    );
}

export default differenceEquation;