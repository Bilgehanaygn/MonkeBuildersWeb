import { style } from "@mui/system";
import iconImage from "../../assets/icon.png"
import imageMainProduct from "../../assets/image0.png"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
import image7 from "../../assets/image7.png"
import image8 from "../../assets/image8.png"

import tokenImage from "../../assets/token.png"
import { Avatar, Card, CardActionArea, CardMedia } from "@mui/material";


const MainBody = () => {

    const styles = {
        mainDiv: {
            backgroundColor:"black", color:"white", paddingTop:"15vh"
        },
        quarterHolder: {
            display:"flex",
            justifyContent:"space-around",
            alignItems:"center",
            padding:"2vw",
        },
        cardStyle:{
            width:"30vw", backgroundColor:"black", color:"white", border:"2px solid white"
        },
        cardHeader:{
            padding:"0.5vw", borderBottom:"2px solid white", fontSize:"2vw"
        },
        cardBody: {
            margin:"0.5vw", fontSize:"1.1vw", textIndent:"1vw"
        },
        avatarStyle: {width:"15vw", height:"15vw", border:"2.3vw solid purple"}

    }
    return (
        <div style={styles.mainDiv}>
            <div style={styles.quarterHolder}>
                <Avatar src={image1} style={styles.avatarStyle} />

                <Card style={styles.cardStyle}>
                    <CardActionArea>
                        <div style={styles.cardHeader}>
                            Monke Builders?
                        </div>
                        <div style={styles.cardBody}>
                        A collective of 4,444 evolved, unique, intelligent Monke Builders joining in Solana ecosystems.
                        Monke Builders will earn the value a great team with 2 devs creating for them.
                        </div>
                        <CardMedia style={{height:"25vw"}} image={"https://www.nicepng.com/png/detail/30-307525_question-pixel-art.png"} alt="monkeimage.png"/>
                    </CardActionArea>
                </Card>

                <Avatar src={image2} style={styles.avatarStyle} />
            </div>
            <div style={styles.quarterHolder}>
                <Avatar src={image7} style={styles.avatarStyle} />

                <Card style={styles.cardStyle}>
                    <CardActionArea>
                        <div style={styles.cardHeader}>
                            Main Product
                        </div>
                        <div style={styles.cardBody}>
                            It is too early to announce detailed information about our main product, but we are working on an assertive product
                            in addition to our side products. The revenue of our products will be used to make our token $DMB more valuable.
                            We will share some hints upcoming days.
                        </div>
                        <CardMedia style={{height:"25vw"}} image={imageMainProduct} alt="monkeimage.png"/>
                    </CardActionArea>
                </Card>

                <Avatar src={image8} style={styles.avatarStyle} />
            </div>
            <div style={styles.quarterHolder}>
                <Avatar src={image5} style={styles.avatarStyle} />

                <Card style={styles.cardStyle}>
                    <CardActionArea>
                        <div style={styles.cardHeader}>
                        Tokenomics: $DMB
                        </div>
                        <div style={styles.cardBody}>
                            We are developing side products such as discord bots, and we have a main product,
                            the revenue of our product will be used to keep our token valuable.
                        </div>
                        <CardMedia style={{height:"25vw"}} image={tokenImage} alt="monkeimage.png"/>
                    </CardActionArea>
                </Card>

                <Avatar src={image6} style={styles.avatarStyle} />
            </div>
            <div style={styles.quarterHolder}>
                <Avatar src={image3} style={styles.avatarStyle} />

                <Card style={styles.cardStyle}>
                    <CardActionArea>
                        <div style={styles.cardHeader}>
                            Staking and Raffle:
                        </div>
                        <div style={styles.cardBody}>
                            Staking and Raffle are now standards for every project. This will also be our 
                            way to share the revenue we make with our side products and with our main product.
                        </div>
                        <CardMedia style={{height:"25vw"}} image={iconImage} alt="monkeimage.png"/>
                    </CardActionArea>
                </Card>

                <Avatar src={image4} style={styles.avatarStyle} />
            </div>
            
        </div>
    );
}

export default MainBody;