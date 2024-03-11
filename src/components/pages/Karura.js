import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'images/img-9.jpg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura1.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura2.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura3.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura4.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura5.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura6.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura7.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
  {
    original: 'images/karura8.jpeg',
    // thumbnail: 'path_to_your_thumbnail_image.jpg',
  },
];

function Karura() {
  return (
    <>
      {/* <h1 className="karura">KARURA FOREST</h1> */}
      <div className="karura-container">
      <article style={{ 
        padding: '1em', 
        margin: '1em 0', 
        backgroundColor: '#f9f9f9', 
        borderRadius: '5px', 
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)' 
        }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          maxWidth: '90vw', 
          height: '100%',
          marginLeft: '0vw'  
        }}>
          <ImageGallery items={images} />
        </div>
        <br/><h2 style={{color: '#333'}}>KARURA FOREST</h2>
        <br/><p style={{fontSize: '12px'}}>By Peter Gathiru | <i class="far fa-clock pre-padding"></i> Mon, 03-May-2021, 05:15</p>
        <br/><p>Karura Forest is an Urban forest in Nairobi, the capital of Kenya. The forest was gazetted in 1932 and is managed by the kenya Forest Service in conjunction with friends Community Forest Association.</p><br/>
        <p>Karura Forest is now developed as a visitors attraction, with some 1600 entries per month. This includes creation of some 50 kilometer of nature trail for walking, running and biking. 
        The first trail, which is four kilometers long and connects Limuru road with Old Kiambu road was opened in May 2009. An electric fence has been built around the forest for security purposes. 
        Although 70% of karura's visitors are kenyan citizens, there is a growing appreciation by an international clientele as witnessed by karura having receiving a Tripadvisor Certificate of Excellence fot two years running (2014-2015) and being listed number 4 out of 101 things to do in Nairobi.</p><br/>
        <p>Activities include: Walking, jogging, tree planting, sitting, bird watching, gathering in designated areas for any number of events, weddings, team building, exhibitions,dogs training, sports, fitness horse riding, mountain biking and tennis.</p><br/>
        <p>Wildlife in the forest include Monkey species ( including recently re-introduced colobus Monkey) bush baby, bushbucks, bush pigs, porcupine, genet, dik dik, African civet and East African epauletted fruit bat.</p><br/>
        <p>Plants species typical to the forest include Olea europaea (var. Africana), Croton megalocarpus, warburgia ugandensis and Uvaridendron anisatum.</p>
      </article>
      </div>
      <Footer />
    </>
  );
}

export default Karura;