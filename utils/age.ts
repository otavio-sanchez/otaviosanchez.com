const calcAge = (date) => {
    return Math.floor(
        Math.ceil(Math.abs(date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)) / 365.25
    );
};

export default calcAge;
