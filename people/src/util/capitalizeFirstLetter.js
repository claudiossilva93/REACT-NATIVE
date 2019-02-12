/**
 * Deixa a primeira palavra de uma letra em maiusculo
 * Ex: exemplo => Exemplo
 */

const capitalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
};  

export default capitalizeFirstLetter;