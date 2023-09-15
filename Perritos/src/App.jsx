import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./assets/components/Header.jsx";
import Card from "./assets/components/Card.jsx";
import Tags from './assets/components/Tags.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './assets/components/Footer';

  function App() {
    return (
      <>
        <Header title="Adopta un perrito"/>
        <section className='layout'>
          <div className="card">
            <Card img='https://cdn.pixabay.com/photo/2015/02/21/10/39/dog-644111_1280.jpg' nombre='Bartolo' des='Bartolo, perro mediano, pelaje     suave y leal. Juguetón, inteligente, compañero amoroso, amigable, ideal para la familia.'/>
            <Tags color='warning' badge='Gran Danes'/>
          </div>
          <div className="card">
            <Card img='https://media.istockphoto.com/id/1403454705/es/foto/un-peque%C3%B1o-cachorro-sonriente-de-un-caniche-marr%C3%B3n-claro-en-un-hermoso-prado-verde-corre.jpg?s=612x612&w=0&k=20&c=gto1s_AqxQhfr_PNAs2N4QMqFdB6NPU4bIy_qTueCeU=' nombre='Princesa' des='Princesa, perrita pequeña, pelaje elegante y mirada dulce. Cariñosa, dócil, compañera ideal para hogares amorosos.'/>
            <Tags color='danger' badge='Shar Pei'/>
          </div>
          <div className="card">
            <Card img='https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg' nombre='Gohan' des='Gohan, perro mediano, pelaje esponjoso y ojos tiernos. Jovial, leal, amigable. Perfecto para familias cariñosas y activas.'/>
            <Tags color='success' badge='Husky'/>
          </div>
          <div className="card">
            <Card img='https://media.istockphoto.com/id/1248789778/es/foto/divertido-juguet%C3%B3n-feliz-sonrisa-perro-perro-corriendo-saltando-en-la-hierba.jpg?s=612x612&w=0&k=20&c=_7hRXG_OEaV80pcDeTGP0BEM0VeEjcw8MnHrUSsjd20=' nombre='Messi' des='Messi, perro pequeño, pelaje corto, ojos vivaces. Activo, curioso, cariñoso. Ideal para hogares activos y afectuosos.'/>
            <Tags color='primary' badge='Bobtail'/>
          </div>
        </section>
        <footer className='footer'>
          <Footer footer='Te invitamos a adentrarte en nuestra maravillosa galería de adopción de perros, donde encontrarás una amplia variedad de hermosos caninos en busca de un hogar amoroso. En este espacio virtual, podrás conocer a nuestros adorables amigos peludos, cada uno con su propia historia y personalidad única. '/>
        </footer>
        
      </> 
);
};
export default App;
