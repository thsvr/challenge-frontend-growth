import { Data, GroupedData } from '../types/types';
import { dateFormatted } from './dateFormatter';

export const dataFormatter = (data: Data[], type: string) => {
    const groups = data.reduce((groups: any, metric: Data) => {
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

    const dataFormatted = groupArrays.map((group: GroupedData) => {
        let sumClick = 0;
        let sumViews = 0;
        let viewsLength = 0;
        let clicksLength = 0;

        group.metrics.map((item: Data) => {
            if (item.name === 'Clicks') {
                sumClick += item.value;
            }
            if (item.name === 'Views') {
                sumViews += item.value;
            }

            viewsLength = group.metrics.filter((item: Data) => item.name === 'Views').length;
            clicksLength = group.metrics.filter((item: Data) => item.name === 'Clicks').length;
        });

        return {
            ...group,
            clicks: clicksLength === 0 || sumClick === 0 ? 0 : Math.floor(sumClick / clicksLength),
            views: viewsLength === 0 || sumViews === 0 ? 0 : Math.floor(sumViews / viewsLength),
        };
    });

    return dataFormatted;
};
