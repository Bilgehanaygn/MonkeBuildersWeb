import React, {useState} from 'react';
import { IconButton } from '@mui/material';
import iconImage from "../../assets/icon.png";
import {TbBrandDiscord} from 'react-icons/tb';
import {FiTwitter} from 'react-icons/fi';

const MyAppBar = () => {
    const [stakingState, setStakingState] = useState("Stake");
    const [raffleState, setRaffleState] = useState("Raffle");

    const mouseOverStaking = () => {
        setStakingState("Soon");
    }
    const mouseLeaveStaking = () => {
        setStakingState("Stake");
    }

    const mouseOverRaffle = () => {
        setRaffleState("Soon");
    }
    const mouseLeaveRaffle = () => {
        setRaffleState("Raffle");
    }

    const styles = {
        appBar: {
            width:"100vw",
            display:"flex",
            justifyContent:"space-between",
            alignItems: "center",
            padding: "1vw 0",
            fontSize:"1.7vw",
            color:"white",
            backgroundColor:"black",
            position:"fixed",
            zIndex: "1",
        },
        pageLogo: {
            marginLeft:"6vw",
            display:"flex",
            alignItems:"center",
        },
        appBarItem: {
            paddingRight: "4vw",
            color:"white",
            textDecoration:"none"
        },
        iconContainer: {
            display:"flex", flexDirection:"row", alignItems:"center"
        },
        iconStyle: {
            width: "2.5vw",
            height: "2.5vw",
        }
    }
    return (
        <div style={styles.appBar}>
            <div style={styles.pageLogo}>
                <img src={iconImage} alt="ablegib" style={{width: "4vw", height:"4vw", borderRadius: "10vw",
                border: "0.2vw solid white", marginRight:"2vw"}} />
                <span style={{fontSize:"2.5vw"}}>
                    Degen Monke Builders
                </span>
            </div>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", marginRight:"5vw"}}>
                <a style={styles.appBarItem} href="/">
                    Home
                </a>
                <a style={styles.appBarItem} onMouseOver={mouseOverStaking} onMouseLeave={mouseLeaveStaking}>
                    {stakingState}
                </a>
                <a style={styles.appBarItem} onMouseOver={mouseOverRaffle} onMouseLeave={mouseLeaveRaffle}>
                    {raffleState}
                </a>
                <a style={styles.appBarItem} href="/team">
                    Team
                </a>
                <span style={styles.iconContainer}>
                    <IconButton style={{marginRight: "2vw", color:"white"}} onClick={()=>{window.open("https://discord.gg/WAUKesew", '_blank');}}>
                        <TbBrandDiscord style={styles.iconStyle}/>
                    </IconButton>
                    <IconButton style={{color:"white"}} onClick={()=>{window.open("https://twitter.com/MonkeBuilders", '_blank');}}>
                        <FiTwitter style={styles.iconStyle}/>
                    </IconButton>
                </span>
            </div>

        </div>
    );

}

export default MyAppBar;
