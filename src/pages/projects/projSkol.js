import React, {useState} from 'react';
import { Grid, GridList, GridListTile, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import ReactPlayer from 'react-player'

import './projSkol.css'

import image from '../../assets/SkolHops/Skol-Hops.png'
import image2 from '../../assets/SkolHops/Skol-Hops2.jpg'
import image3 from '../../assets/SkolHops/Skol-Hops3.jpg'
import image4 from '../../assets/SkolHops/Skol-Hops4.jpg'
import image5 from '../../assets/SkolHops/Skol-Hops5.png'
import image6 from '../../assets/SkolHops/Skol-Hops6.jpg'

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

function ProjSkol() {
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

        <ReactPlayer width='100%' height='350px' style={{padding:'0 5px 20px 2px'}} url='https://youtu.be/bCOh6BBPCRQ' />

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
              Skol Hops
            </Box>
            <Box  className="subtitle" fontWeight={100} fontSize={14} >Aplicativos & Marketing & Simuladores</Box>
            <Box className="text" fontWeight={100} fontSize={14} textAlign="justify">
              O "Jângalove. Movimento Ritmo." foi um evento aberto 
              ao público em Belo Horizonte. O evento tinha como tema 
              a saudade da folia, promovendo uma dose de fim de ano para
              receber a energia do carnaval. Em meio os shows e 
              barraquinhas, oficinas de percursão e muito mais, a 
              Gaz Games estava lá para trazer tecnologia e inovação.
              Em parceria com a Skol, desenvolvemos um aplicativo utilizando
              um leitor de ondas cerebrais para definir perfis de cervejeiros
              nas pessoas que experimentavam a cerveja do momento: Skol Hops. 
              O usuário chegava no estande, se sentava em frente à um telão 
              com um cérebro em 3D. Munia-se de um fone que tocava um áudio 
              binaural, ou seja, 360 graus de narração dinâmica, que guiava 
              o usuário em como abrir, saborear e sentir a cerveja.
              Em paralelo, o leitor enviava dados, refletidos no telão em tempo real, das ondas dentro da cabeça do usuário enquanto experimentava uma Skol Hops em sua magnitude. Por fim, definia-se um perfil cervejeiro com base nos movimentos de suas ondas, e permitia-se fotos da pessoa com um still do seu cérebro. Foi um evento muito divertido de comparecer, novamente misturando o lúdico com o tecnológico, especialidade da Gaz Games.
            </Box>
          </Typography>
                                     
        </Grid>
        
        </Grid>

      </Grid>

    </Grid>

)}

export default ProjSkol;