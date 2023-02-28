import { format } from 'date-fns';

export const dateFormatted = (date: string, type: string) => {
    let dateFormatted = date;

    if (type === 'day') {
        dateFormatted = format(new Date(date), 'MMMM, dd');
    }

    if (type === 'hour') {
        dateFormatted = format(new Date(date), 'MMM, dd - hh aa');
    }

    if (type === 'minute') {
        dateFormatted = format(new Date(date), 'MMM, dd - hh:mm');
    }

    return dateFormatted;
};
