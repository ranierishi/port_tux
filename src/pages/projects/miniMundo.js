import React, {useState} from 'react';
import { Grid, GridList, GridListTile, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
//import ReactPlayer from 'react-player'

import './projSkol.css'

import image from '../../assets/Mini_Mundo/Mundo-CNH-Industrial.png'
import image2 from '../../assets/Mini_Mundo/Mundo-CNH-Industrial2.png'
import image3 from '../../assets/Mini_Mundo/Mundo-CNH-Industrial3.png'
import image4 from '../../assets/Mini_Mundo/Mundo-CNH-Industrial4.png'
import image5 from '../../assets/Mini_Mundo/Mundo-CNH-Industrial5.png'
import image6 from '../../assets/Mini_Mundo/Mundo-CNH-Industrial6.png'

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

function MiniMundo() {
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
              Mini Mundo CNHI
            </Box>
            <Box  className="subtitle" fontWeight={100} fontSize={14} >Aplicativos & Realidade Aumentada & Marketing</Box>
            <Box className="text" fontWeight={100} fontSize={14} textAlign="justify">
            Aplicativos & Realidade Aumentada & Marketing
            Como forma de aproximar os trabalhadores da marca, a CNHI desenvolveu conosco o projeto Mini Mundo CNHI.
            Após um breve cadastro, o visitante poderia segurar um marcador de Realidade Aumentada, que projetava no 
            dispositivo nas mãos da promotora um mini mundo 3D, que abrange todas as áreas e marcas componentes da CNH Industrial.
            No mesmo dispositivo e software, era possível tirar uma foto do momento da interação e enviar por e-mail para fins variados.
            </Box>
          </Typography>
                                     
        </Grid>
        
        </Grid>

      </Grid>

    </Grid>

)}

export default MiniMundo;