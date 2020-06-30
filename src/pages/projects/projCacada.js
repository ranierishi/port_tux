import React, {useState} from 'react';
import { Grid, GridList, GridListTile, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'

import './projSkol.css'

import image from '../../assets/Cacada_Autentica/Cacada-Autentica.png'
import image2 from '../../assets/Cacada_Autentica/Cacada-Autentica2.png'
import image3 from '../../assets/Cacada_Autentica/Cacada-Autentica3.png'
import image4 from '../../assets/Cacada_Autentica/Cacada-Autentica4.png'
import image5 from '../../assets/Cacada_Autentica/Cacada-Autentica5.png'
import image6 from '../../assets/Cacada_Autentica/Cacada-Autentica6.png'

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

function ProjCacada() {
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

        <ReactPlayer width='100%' height='350px' style={{padding:'0 5px 20px 2px'}} url='https://www.youtube.com/watch?v=OZHyD7Si1jg&feature=emb_logo' />

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
              Caçada Autêntica Minas Shopping
            </Box>
            <Box  className="subtitle" fontWeight={100} fontSize={14} >Games & Realidade Aumentada & Marketing</Box>
            <Box className="text" fontWeight={100} fontSize={14} textAlign="justify">
            O Natal no Minas Shopping em 2017 foi muito especial! Além da pompa e circunstância comuns ao grande
             evento, esse ano contamos com a presença ilustre do Marco Túlio; o Authentic Games, trazendo todos os
              personagens do mundo Authentic consigo. Nesse espírito, a Gaz Games desenvolveu um jogo com Realidade
               Aumentada, que consistia nos convidados percorrerem o shopping em busca de imagens do universo Authentic
                e capturá-las com seus smartphones e tablets. Ao fazê-lo, os convidados eram presenteados com várias
                 animações 3D dos personagens que, juntas, contavam a história do Authentic buscando o presente de
                  Natal da Lydia. Além de toda a experiência da caçada, os jogadores que completavam o jogo eram
                   agraciados com um minigame exclusivo!
            </Box>
          </Typography>
                                     
        </Grid>
        
        </Grid>

      </Grid>

    </Grid>

)}

export default ProjCacada;