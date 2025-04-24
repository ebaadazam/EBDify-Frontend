// import { Avatar, Button, Menu, MenuItem } from '@mui/material';
// import React from 'react'
// import { BiUser } from 'react-icons/bi';
// import { FaShoppingCart } from 'react-icons/fa';
// import { IoExitOutline } from 'react-icons/io5';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import BackDrop from './BackDrop';
// import { logOutUser } from '../store/actions';

// const UserMenu = () => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const { user } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     const logOutHandler = () => {
//         dispatch(logOutUser(navigate));
//       };
  
//     return (
//       <div className='relative z-30'>
//         <div
//         className='sm:border-[1px] sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'
//           onClick={handleClick}
//         >
//           <Avatar alt='Menu' src=''/>
//         </div>
//         <Menu
//           sx={{ width:"400px" }}
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             'aria-labelledby': 'basic-button',
//             sx: {width: 160},
//           }}
//         >

//           <Link to="/profile">
//             <MenuItem className="flex gap-2" 
//                 onClick={handleClose}>
//                     <BiUser className='text-xl'/>
//                     <span className='font-bold text-[16px] mt-1'>
//                         {user?.username}
//                     </span>
//             </MenuItem>
//           </Link>

//           <Link to="/profile/orders">
//             <MenuItem className="flex gap-2" 
//                 onClick={handleClose}>
//                     <FaShoppingCart className='text-xl'/>
//                     <span className='font-semibold'>
//                         Order
//                     </span>
//             </MenuItem>
//           </Link>

//             <MenuItem className="flex gap-2" 
//                 onClick={logOutHandler}>
//                     <div className='font-semibold w-full flex gap-2 items-center bg-button-gradient px-1 py-1 text-white rounded-sm'>
//                     <IoExitOutline className='text-xl text-black'/>
//                     <span className='font-bold text-[14px] text-black mt-1'>
//                         Logout
//                     </span>
//                     </div>
//             </MenuItem>

//         </Menu>

//         {open && <BackDrop />}
//       </div>
//     );
// }

// export default UserMenu



import { Avatar, Menu, MenuItem, Divider, Typography, Grow } from '@mui/material';
import React from 'react';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BackDrop from './BackDrop';
import { logOutUser } from '../store/actions';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutHandler = () => {
        dispatch(logOutUser(navigate));
    };

    return (
        <div className='relative z-30'>
            <div
                className='flex items-center rounded-full cursor-pointer hover:scale-[1.02] transition-transform'
                onClick={handleClick}
            >
                <Avatar 
                    alt={user?.username || 'User'} 
                    src={user?.avatar}
                    sx={{ 
                        width: 34, 
                        height: 34,
                        bgcolor: '#6366f1',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                            boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.3)'
                        }
                    }}
                />
            </div>

            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Grow}
                MenuListProps={{
                    'aria-labelledby': 'user-menu-button',
                    sx: { 
                        width: 200,
                        py: 0,
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    },
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 1px 4px rgba(0,0,0,0.1))',
                        mt: 1,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className="px-3 py-2 border-b">
                    <Typography variant="subtitle2" fontWeight="600" noWrap>
                        {user?.username || 'User'}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>
                        {user?.email}
                    </Typography>
                </div>

                <Link to="/profile">
                    <MenuItem 
                        onClick={handleClose}
                        sx={{ 
                            py: '6px',
                            px: 2,
                            my: 0.1,
                            '&:hover': { bgcolor: 'rgba(99, 102, 241, 0.08)' } 
                        }}
                        dense
                    >
                        <FaRegUserCircle className="mr-2 text-base text-indigo-500" />
                        <span className="text-sm font-medium">Profile</span>
                    </MenuItem>
                </Link>

                <Link to="/profile/orders">
                    <MenuItem 
                        onClick={handleClose}
                        sx={{ 
                            py: '6px',
                            px: 2,
                            my: 0.1,
                            '&:hover': { bgcolor: 'rgba(99, 102, 241, 0.08)' } 
                        }}
                        dense
                    >
                        <FaShoppingCart className="mr-2 text-base text-indigo-500" />
                        <span className="text-sm font-medium">Orders</span>
                    </MenuItem>
                </Link>

                <Divider sx={{ my: '4px!important' }} />

                <MenuItem 
                    onClick={logOutHandler}
                    sx={{ 
                        py: '6px',
                        px: 2,
                        my: 0.1,
                        '&:hover': { 
                            bgcolor: 'rgba(239, 68, 68, 0.08)' 
                        } 
                    }}
                    dense
                >
                    <IoExitOutline className="mr-2 text-base text-red-500" />
                    <span className="text-sm font-medium text-red-500">Logout</span>
                </MenuItem>
            </Menu>

            {open && <BackDrop />}
        </div>
    );
}

export default UserMenu;