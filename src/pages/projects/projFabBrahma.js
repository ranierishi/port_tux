import React, {useState} from 'react';
import { Grid, GridList, GridListTile, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'

import './projSkol.css'

import image from '../../assets/Brahma_Extra/Brahma-Extra.png'
import image2 from '../../assets/Brahma_Extra/Brahma-Extra2.png'
import image3 from '../../assets/Brahma_Extra/Brahma-Extra3.png'
import image4 from '../../assets/Brahma_Extra/Brahma-Extra4.png'
import image5 from '../../assets/Brahma_Extra/Brahma-Extra5.png'
import image6 from '../../assets/Brahma_Extra/Brahma-Extra6.png'

//

const useStyles = makeStyles({
  root: {    
    flexGrow:1,   
    paddingTop:"80px",
    justifyContent:"center",
    background:"#f5f5f5",
    alignItems: "center", 
    margin:"0px",
    paddingBottom:"100px",
    display: 'flex',
    flexWrap: 'wrap',    
    overflow: 'visible',
    
    
  },  
  gridList: {
    width: 500,
    
  },
  stick:{
    
  
  },
  
  link:{
    textDecoration:"none"    
  }
});


const tileData = [
     {
       img: image,
       title: 'Image',
       author: 'author',
       featured: true,
     },
     {
      img: image2,
      title: 'Image',
      author: 'author',
      featured: false,
    },
    {
      img: image3,
      title: 'Image',
      author: 'author',
      featured: false,
    },
    {
      img: image4,
      title: 'Image',
      author: 'author',
      featured: false,
    },
    
    {
      img: image5,
      title: 'Image',
      author: 'author',
      featured: false,
    },
    {
      img: image6,
      title: 'Image',
      author: 'author',
      featured: true,
    },
     
   ];

   const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border                : '0',
      backgroundColor       : 'transparent'
    }
  };

function ProjFabBrahma() {
  const classes = useStyles()

  const [fotoModal, setFotoModal] = useState("");
  

  //var subtitle;
  const [modalIsOpen,setIsOpen] = useState(false);
  function openModal(e) {
    setFotoModal(e)
    setIsOpen(true);
  }
 
  function afterOpenModal(e) {
    // references are now sync'd and can be accessed.
    
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  Modal.setAppElement(document.getElementById('root'));
  return (
    <Grid container className={classes.root}>
      <Grid container item className="containerx" xs={12} spacing={0} justify="center" alignContent="center">
        
        
        <Grid container item  xs={12} sm={4} justify="center" alignContent="center">  

        <ReactPlayer width='100%' height='350px' style={{padding:'0 5px 20px 2px'}} url='https://www.youtube.com/watch?v=YN3HJnzGPGU&feature=emb_logo' />

          <GridList cellHeight={250} spacing={1} className={classes.gridList}>
            {tileData.map((tile) => (
              <GridListTile  onClick={e => {openModal(tile.img)}} style={{cursor: 'pointer' }} key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                
                  <img  className='sticky' src={tile.img} alt={tile.title} />
                
              </GridListTile>
            ))}
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Gallery"
              overlayClassName="Overlay"
            >              
              <button className="closeButton" onClick={closeModal}>X</button>

               <img alt="test" src={fotoModal} height="500px" width="" />
              
            </Modal>
          </GridList>
        </Grid>

        <Grid container item className="test2" xs={12} sm={3}>
            
                
                  
                

        <Grid container item xs={12} justify="center">           
          <Typography  component="div" align="center">
            <Box fontWeight={600} fontSize={30}>
                Fábrica Extraordinária Brahma Extra
            </Box>
            <Box  className="subtitle" fontWeight={100} fontSize={14} >Aplicativos & Realidade Aumentada & Marketing</Box>
            <Box className="text" fontWeight={100} fontSize={14} textAlign="justify">
              Durante o Comida di Buteco 2017, a Brahma criou, no pátio do Mineirinho, uma miniatura lúdica de uma 
              fábrica de cerveja, com galões e tambores, e todos os ingredientes utilizados no processo de criação da 
              bebida, para que os visitantes aprendessem um pouco sobre as origens da cerveja.
              Em adição à essa imersão, a Gaz Games foi convidada para desenvolver um aplicativo de realidade aumentada 
              que interagia diretamente com esses props reais, mostrando a parte do processo que não era possível naquela 
              situação. Interiores de tambor, processos de filtro e misturas, todo o caminho, do início ao fim, até o engarrafamento.
              Uma experiência completa, com modelos 3D imersivos e detalhados e uma grande carga de informações, sobre a produção e sobre a degustação ideal das três cervejas prestigiadas: a Brahma Extra Lager, Brahma Extra Red Lager e Brahma Extra Weiss.
            </Box>
          </Typography>
                                     
        </Grid>
        
        </Grid>

      </Grid>

    </Grid>

)}

export default ProjFabBrahma;