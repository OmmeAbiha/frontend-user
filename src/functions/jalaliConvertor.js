import moment from 'jalali-moment';

const convertToJalali = (d) => {
    const date = moment(d);
    const jalaliDate = date.locale('fa').format('YYYY/MM/DD');
    const jalaliD = date.locale('fa').format('jD');
    const jalaliM = date.locale('fa').format('jMMMM');
    const monthNum = date.locale('fa').format('MM');
    const jalaliY = date.locale('fa').format('jYYYY');
    const jalaliTime = date.locale('fa').format('HH:mm');
    return {
        watch: jalaliTime,
        only: {
            year: jalaliY,
            month: jalaliM,
            day: jalaliD,
        },
        monthNum: monthNum,
        dateNum: jalaliDate,
        date: `${jalaliD} ${jalaliM} ${jalaliY}`
    };
};

export default convertToJalali;

