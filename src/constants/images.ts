import logo from '../assets/Logo.svg'
import heroImage from '../assets/HeroImage.svg'
import _art1 from '../../public/article/1.jpg'
import _art2 from '../../public/article/2.jpg'
import _art3 from '../../public/article/3.jpg'
import _art4 from '../../public/article/4.jpg'
import _art5 from '../../public/article/5.jpg'
import _art6 from '../../public/article/6.jpg'
import _art7 from '../../public/article/7.jpg'
import _art8 from '../../public/article/8.jpg'
import _art9 from '../../public/article/9.jpg'

const art1 = _art1.split('/public')[1];
const art2 = _art2.split('/public')[1];
const art3 = _art3.split('/public')[1];
const art4 = _art4.split('/public')[1];
const art5 = _art5.split('/public')[1];
const art6 = _art6.split('/public')[1];
const art7 = _art7.split('/public')[1];
const art8 = _art8.split('/public')[1];
const art9 = _art9.split('/public')[1];

const images = {
    logo,
    heroImage,
    art1,
    art2,
    art3,
    art4,
    art5,
    art6,
    art7,
    art8,
    art9,
}

export default images;