import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { authActions } from '../store';

const Header = () => {
    const [value, setValue] = useState(0);
    const location = useLocation();
    const dispatch = useDispatch();

    // Initialize isLoggedIn state from localStorage
    const isLoggedInFromStorage = localStorage.getItem('isLoggedIn') === 'true';

    // Initialize isLoggedIn state using Redux store
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const [showLoginPrompt, setShowLoginPrompt] = useState(true);


    
    useEffect(() => {
        // Check both localStorage and Redux store for isLoggedIn
        if (isLoggedIn || isLoggedInFromStorage) {
            setShowLoginPrompt(false);
        }
    }, [isLoggedIn, isLoggedInFromStorage]);

    const handleLoginClick = () => {
        setShowLoginPrompt(false);
    };

    const handleLogout = () => {
        // Clear the isLoggedIn status in localStorage
        localStorage.setItem("isLoggedIn", "false");
        // Dispatch the logout action to update the Redux store
        dispatch(authActions.logout());
    };

    return (
        <>
            <AppBar position='sticky' sx={{ background: 'linear-gradient(#cc2b5e,#753a88)' }}>
                <Toolbar>
                    <Typography color='black' fontSize='32px' fontWeight='700'>
                        Blogs
                    </Typography>

                    <Box sx={{ display: 'flex' }} marginLeft={"auto"}>
                        {!isLoggedIn && (
                            <>
                                <Button LinkComponent={Link} to="/login" variant="contained"  sx={{ color: 'Black', fontSize: '14px', fontWeight: '600', borderRadius: 10, marginRight: '40px' }} onClick={handleLoginClick}>Login</Button>
                                <Button LinkComponent={Link} to="/signup" variant="contained"  sx={{ color: 'Black', fontSize: '14px', fontWeight: '600', borderRadius: 10, marginRight: '10px' }} onClick={handleLoginClick}>SignUp</Button>
                            </>
                        )}
                        {isLoggedIn && 
                        <>
                            <Button LinkComponent={Link} onClick={handleLogout}  to="/login" variant='contained' sx={{ color: 'Black', fontSize: '14px', fontWeight: '600', marginLeft: '30px', borderRadius: 10 }}>LogOut</Button>

                        </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>

            {isLoggedIn  && (
                <Box display="flex" marginLeft={"150px"} marginRight="auto" paddingTop={"30px"}>
                    <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Button variant='contained' sx={{ marginRight: '100px' }}>
                            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        </Button>
                        <Button variant='contained' sx={{ marginRight: '100px' }}>
                            <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
                        </Button>
                        <Button variant='contained'>
                            <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
                        </Button>
                    </Tabs>
                </Box>
            )}

            {!isLoggedIn && showLoginPrompt && location.pathname === '/' &&(
                <Typography id="header" sx={{ textAlign: 'center', paddingTop: '200px', fontSize: '24px', fontWeight: '700' }}>Hello Coders.<br></br> <br></br>Welcome to My Blog Application. To Add and view your own Blogs Firstly Login.</Typography>
            )}
        </>
    );
}

export default Header;
