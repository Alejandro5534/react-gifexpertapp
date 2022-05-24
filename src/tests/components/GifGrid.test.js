import {shallow} from 'enzyme'
// import {createSerializer} from 'enzyme-to-json'
// impourt { GifGrid } from '../../components/GifGrid';
import { GifGridItem } from '../../components/GifGridItem';

describe ('Pruebas a GifGrid',()=> {
    
    const title = 'Soy un titulo';
    const url = 'https://localhost/imagen.jpg';
    const wrapper = shallow(<GifGridItem title={title} url = {url}/>);
    test('debe de mostrar el componente correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener un parrafo con el title', ()=>{
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })
    test('debe de tener la imagen igual al url y alt de los props', ()=>{
        const img = wrapper.find('img');
        // console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })
    test('debe de tener animate_fadeIn', ()=>{
        const div = wrapper.find('div');
        const classNameRequired = 'animate__fadeIn'
        // console.log(div.prop('className'))
        expect(div.prop('className').includes(classNameRequired)).toBe(true)
    })

})