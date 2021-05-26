import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    {
        title: 'Lista',
        icon: 'list',
        value: 'list',
        color: 'teal',
        url: "/home/communications"
    },
    {
        title: 'Értesítések',
        icon: 'notifications',
        value: 'notifications',
        color: 'cyan',
        url: "/home/notification"
    },
    {
        title: 'Figyelmeztetés',
        icon: 'report',
        value: 'report',
        color: '#c2185b',
        url: "/home/alert"
    }
];