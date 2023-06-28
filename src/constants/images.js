import filterUrl from '../assets/images/filter.svg'
import downUrl from '../assets/images/down.png'
import upUrl from '../assets/images/up.png'
import backUrl from '../assets/images/back.svg'
import unheartUrl from '../assets/images/unheart.png'
import heartUrl from '../assets/images/heart.png'

import iphoneUrl from '../assets/images/iphone.png'
import samsungUrl from '../assets/images/samsung.png'
import oppoUrl from '../assets/images/oppo.jpg'
import xiaomiUrl from '../assets/images/xiaomi.png'
import vivoUrl from '../assets/images/vivo.png'
import realmeUrl from '../assets/images/realme.png'
import nokiaUrl from '../assets/images/nokia.jpg'
import masstelUrl from '../assets/images/masstel.png'
import itelUrl from '../assets/images/itel.jpg'
import mobellUrl from '../assets/images/mobell.jpg'

const ICON = {
  FILTER: filterUrl,
  DOWN: downUrl,
  UP: upUrl,
  BACK: backUrl,
  UNHEART: unheartUrl,
  HEART: heartUrl
};

const BRAND = [
  {
    id: 1,
    imageURL: iphoneUrl,
    type: 'iphone'
  },
  {
    id: 2,
    imageURL: samsungUrl,
    type: 'samsung'
  },
  {
    id: 3,
    imageURL: oppoUrl,
    type: 'oppo'
  },
  {
    id: 4,
    imageURL: xiaomiUrl,
    type: 'xiaomi'
  },
  {
    id: 5,
    imageURL: vivoUrl,
    type: 'vivo'
  },
  {
    id: 6,
    imageURL: realmeUrl,
    type: 'realme'
  },
  {
    id: 7,
    imageURL: nokiaUrl,
    type: 'nokia'
  },
  {
    id: 8,
    imageURL: masstelUrl,
    type: 'masstel'
  },
  {
    id: 9,
    imageURL: itelUrl,
    type: 'itel'
  },
  {
    id: 10,
    imageURL: mobellUrl,
    type: 'mobell'
  }
];
export { ICON, BRAND };
