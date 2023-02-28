import { dateFormatted } from './dateFormatter';

export const dataFormatter = (data: any, type: string) => {
    const groups = data.reduce((groups: any, metric: any) => {
        const date = dateFormatted(metric.timestamp, type);
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(metric);
        return groups;
    }, {});

    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            metrics: groups[date],
        };
    });

    const dataFormatted = groupArrays.map((group: any) => {
        let sumClick = 0;
        let sumViews = 0;
        let viewsLength = 0;
        let clicksLength = 0;

        group.metrics.map((item: any) => {
            if (item.name === 'click') {
                sumClick += item.value;
            }
            if (item.name === 'view') {
                sumViews += item.value;
            }

            viewsLength = group.metrics.filter((item: any) => item.name === 'view').length;
            clicksLength = group.metrics.filter((item: any) => item.name === 'click').length;
        });

        return {
            ...group,
            click: clicksLength === 0 || sumClick === 0 ? 0 : Math.floor(sumClick / clicksLength),
            views: viewsLength === 0 || sumViews === 0 ? 0 : Math.floor(sumViews / viewsLength),
        };
    });

    return dataFormatted;
};
