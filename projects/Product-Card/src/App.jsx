import './App.css'
import { ProductCard } from "./ProductCard";

export function App(){
   return(
      <section className="App">
         <ProductCard prName='Ceramico piso color Cafe A 55x55' prStock='15' imgURL='https://distribuidoramariscal.com.gt/wp-content/uploads/2021/03/piso-ceramico-mar-de-plata-cafe-comp-705x705.jpg'/>
         <ProductCard prName='Rulemanes Timken Hm518445/10inch' prStock='10' imgURL='https://th.bing.com/th/id/OIP.VTrBsz-KdnJwLudKoPu_fQAAAA?rs=1&pid=ImgDetMain'/>
         <ProductCard prName='Bulones cabeza hexagonal de hierro Metrica MA' prStock='45' imgURL='https://th.bing.com/th/id/R.45d9d1c1fb6424d6a98822d98122acfe?rik=7Gh%2b2S5V8gNPXA&riu=http%3a%2f%2fcasoni.com.ar%2fwp-content%2fuploads%2f2018%2f05%2fmaferbul.bulon_.cabeza.hexagonal.G2.jpg&ehk=eTD3%2bAdazRb7pQ2sIF%2f0SpXPuQac0RYeJh236Djv17k%3d&risl=&pid=ImgRaw&r=0'/>
      </section>
   );
};