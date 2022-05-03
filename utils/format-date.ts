const formatDate = (date) => {
    const format = new Date(date),
        day = format.getDate().toString().padStart(2, '0'),
        month = (format.getMonth() + 1).toString().padStart(2, '0'),
        year = format.getFullYear();
    return `${day}/${month}/${year}`;
};

export default formatDate;
