import axios from "axios";
import qs from 'qs'

export const getAccessToken = () => async dispatch => {
    var options = {
        'method': 'POST',
        'url': 'https://us.battle.net/oauth/token',
        auth:{
            username: "957a415ff60343e1ba914c6e6776cb99",
            password: "UENcLNmdGBIZ75W2sK7bcJ7eQz5Gpe9g"
        },
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: qs.stringify( {
            'grant_type': 'client_credentials'
        })
    };
    try {
        let response = await axios(options);
        dispatch({
            type: "ACCESS_TOKEN",
            payload: response.data.access_token
        });
    }catch(e){

    }
};

export const fetchBattlegroundsCards = () => async (dispatch, getState) => {
    let accessToken = getState().accessToken;
    if(accessToken){
        var options = {
            url : "https://us.api.blizzard.com/hearthstone/cards?locale=en_US&gameMode=battlegrounds&access_token="+accessToken,
            method: "GET"
        };
        try{
            let response = await axios(options);
            dispatch({
                type: "CARDS",
                payload: response.data.cards
            });
        }catch(e){
        }
    }
};

export const changeTab = (tab) => async dispatch => {
    dispatch({
        type: "TAB_CHANGE",
        payload: tab
    });
};