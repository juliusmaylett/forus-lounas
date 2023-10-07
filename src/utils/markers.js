import L from 'leaflet';

export const officeLocation = {
    lat: 60.1648,
    lng: 24.9442
}

export const homeIcon = new L.Icon({
    iconUrl: '/home.svg',
    iconAnchor: [12, 12],
    iconSize: [24, 24]
});

export const restaurantIcon = new L.Icon({
    iconUrl: '/food.svg',
    iconAnchor: [12, 12],
    iconSize: [24, 24]
});