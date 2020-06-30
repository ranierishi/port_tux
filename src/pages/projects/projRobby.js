import React, {useState} from 'react';
import { Grid, GridList, GridListTile, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'

import './projSkol.css'

import image from '../../assets/Robbyson_Land/Robbyson-Land.png'
import image2 from '../../assets/Robbyson_Land/Robbyson-Land2.png'
import image3 from '../../assets/Robbyson_Land/Robbyson-Land3.png'
import image4 from '../../assets/Robbyson_Land/Robbyson-Land4.png'
import image5 from '../../assets/Robbyson_Land/Robbyson-Land5.png'
import image6 from '../../assets/Robbyson_Land/Robbyson-Land6.png'

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
      img: image6,
      title: 'Image',
      author: 'author',
      featured: false,
    },
    {
      img: image5,
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

function ProjRobby() {
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

        <ReactPlayer width='100%' height='350px' style={{padding:'0 5px 20px 2px'}} url='https://www.youtube.com/watch?v=wc0V4g6At1s&feature=emb_logo' />

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
              Robbyson Land
            </Box>
            <Box  className="subtitle" fontWeight={100} fontSize={14} >Aplicativos & Realidade Aumentada & Games</Box>
            <Box className="text" fontWeight={100} fontSize={14} textAlign="justify">
            Desenvolvido em 2016/7, com suporte de atualizações até os dias atuais, Robbyson Land é um jogo produzido
             em parceria com a AeC e a marca Robbyson, para divulgar, entreter e estreitar as relações dos usuários e a
              plataforma Robbyson. Através de um mundo em miniatura, com personagens e locais fictícios da cidade
               Robbyson Land, o jogador tem tarefas como cuidar do seu avatar, ter uma carreira e ir ao trabalho, à
                faculdade, responder à necessidades da cidade e seus habitantes, enquanto pode se divertir com jogos
                 e personalizar o seu avatar. Disponível na Google Play e App Store, Robbyson Land é um jogo de
                  gerenciamento de personagem, divertido e que une os universos corporativo e lúdico.
            </Box>
          </Typography>
                                     
        </Grid>
        
        </Grid>

      </Grid>

    </Grid>

)}

export default ProjRobby;