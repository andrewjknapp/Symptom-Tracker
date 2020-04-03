import React, { useState, useEffect } from 'react';
import {
    getFromStorage, setInStorage
} from '../../utils/storage';
import "whatwg-fetch";


function Logout()  {

    const [loading, setLoading] = useState({
        isLoading: true,
    });
    const [token, setToken] = useState('');

    useEffect(() => {
        const obj = getFromStorage('symptom_tracker');
        if (obj && obj.token) {
            const { token } = obj;
            //verify token
            fetch('/api/account/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        setToken({
                            token,
                        });
                        setLoading({
                            isLoading: false
                        })
                    }
                    else {
                        setLoading({
                            isLoading: false
                        })
                    }
                });
        } else {
            setLoading({
                isLoading: false,
                // set state for different things/
            });
        }
    }, [])

    

    const obj = getFromStorage('symptom_tracker');
    if (obj && obj.token) {
        const { token } = obj;
        //verify token
        fetch('/api/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    setToken({
                        token: '',
                    });
                    setLoading({
                        isLoading: false,
                    })
                } else {
                    setLoading({
                        isLoading: false,
                    });
                }
            });
    } else {
        setLoading({
            isLoading: false,
            // set state for different things/
        });
    }



    
}

export default Logout