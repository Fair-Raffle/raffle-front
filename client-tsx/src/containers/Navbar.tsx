import Menu from '../assets/menu.png';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { useConnectors, useAccount } from '@starknet-react/core';

export default function Navbar() {
    const { account, address, status } = useAccount();
    const { connect, connectors, disconnect } = useConnectors();
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [text, setText] = useState('Connect Wallet');
    const [select, setSelect] = useState(false);

    const ConnectModal = () => {
        return (
            <div className="fixed top-0 left-0 flex w-full h-full bg-black bg-opacity-50 z-50 ">
                <div className="flex flex-col w-1/4 py-4 h-fit bg-raffle-holder border-[1px] border-[#70769D] shadow-step rounded-lg mx-auto my-auto justify-between space-y-2">
                    <div className="flex flex-row justify-between ">
                        <span className="px-4 text-[24px] font-bebas">
                            CONNECT YOUR STARKNET WALLET
                        </span>
                        <span
                            onClick={() => {
                                setShowConnectModal(false);
                            }}
                            className="text-white px-4 h-fit my-auto w-fit hover:cursor-pointer"
                        >
                            CLOSE
                        </span>
                    </div>
                    <span className="text-white text-[20px] px-4 pb-16"> to Start Any Fair Raffle</span>
                    {connectors.map((connector) => (
                        <button
                            className="text-white w-[90%] mx-auto rounded-[4px] shadow-wallet border[#646b97] bg-[#2b3142] font-bourgeois font-[14px] mx-auto h-fit my-auto py-2 hover:cursor-pointer"
                            onClick={() => connect(connector)}
                        >
                            {connector.id() === 'argentX'
                                ? 'CONNECT ARGENT WALLET'
                                : 'CONNECT BRAAVOS WALLET'}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const disconnectWallet = () => {
        disconnect();
        setText('Connect Wallet');
    };

    useEffect(() => {
        if (status === 'connected') {
            setShowConnectModal(false);
            setText(
                address?.substring(0, 6) +
                    '...' +
                    address?.substring(address?.length - 4)
            );
        }
    }, [status]);

    return (
        <div className="relative top-0 left-0 flex flex-row pt-[91px] pb-[65px] ">
            {showConnectModal && <ConnectModal />}
            <img
                src={Menu}
                className="lg:hidden w-[3rem] h-[3rem] mr-4 ml-auto my-auto "
            />
            <div className="flex flex-row my-auto hidden ml-0 mr-auto w-fit lg:flex">
                <Link to={'/'} className="text-[44px] text-white text-left">
                    <span className="font-bebas">FAIR</span>
                    <span className="text-[#A5FF4C] font-bebas">RAFFLE</span>
                    <span className="font-bebas">.IO</span>
                </Link>
            </div>
            <div className="flex flex-row ml-auto mr-0 my-auto space-x-8 hidden lg:flex">
                {status === 'disconnected' && (
                    <Link
                        to={'/raffles'}
                        className="text-white px-4 h-fit my-auto py-1 hover:cursor-pointer hover:text-[#6295FE]"
                    >
                        SEARCH
                    </Link>
                )}
                {status === 'connected' && (
                    <Link
                        to={'/'}
                        className="text-white px-4 h-fit my-auto py-1 hover:cursor-pointer whitespace-nowrap hover:text-[#6295FE]"
                    >
                        START RAFFLE
                    </Link>
                )}
                {status === 'connected' && (
                    <div
                        onMouseEnter={() => setSelect(true)}
                        onMouseLeave={() => setSelect(false)}
                        className={`${
                            select ? 'bg-raffle-holder' : ' '
                        } relative w-full question py-4 left-0 right-0 top-0 bottom-0  my-auto right-[100%]`}
                    >
                        <div className="flex items-center px-2 py-2 text-white cursor-pointer hover:text-[#6295FE]">
                            RAFFLES
                            <button className="ml-auto">
                                <svg
                                    className="fill-current opacity-75 w-4 h-4 -mr-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={`${
                                select ? 'flex' : 'hidden'
                            } absolute w-full flex-col`}
                        >
                            <Link
                                to="/raffles"
                                className="bg-raffle-holder hover:text-white px-2 py-2 top-[45%] leading-normal text-[#6C76B2] text-md whitespace-nowrap cursor-pointer"
                            >
                                PAST RAFFLES
                            </Link>
                            <Link
                                to="/"
                                className="bg-raffle-holder hover:text-white px-2 py-2 top-[50%] leading-normal text-[#6C76B2] text-md whitespace-nowrap cursor-pointer"
                            >
                                YOUR RAFFLES
                            </Link>
                            <Link
                                to="/selected"
                                className="bg-raffle-holder hover:text-white px-2 py-2 top-[100%] leading-normal text-[#6C76B2] text-md whitespace-nowrap cursor-pointer"
                            >
                                NFT RAFFLES
                            </Link>
                        </div>
                    </div>
                )}
                {status === 'connected' && (
                    <Link
                        to="/create"
                        className="text-white px-4 h-fit my-auto py-1 hover:cursor-pointer hover:text-[#6295FE]"
                    >
                        PROFILE
                    </Link>
                )}
                <span
                    onClick={() =>
                        status === 'disconnected'
                            ? setShowConnectModal(true)
                            : disconnectWallet()
                    }
                    className="text-white border-2 border-white px-4 h-fit my-auto py-1 hover:cursor-pointer"
                >
                    {status === 'connected' ? (
                        <span
                            className="text-[#A5FF4C]"
                            onMouseLeave={() => {
                                setText(
                                    address?.substring(0, 6) +
                                        '...' +
                                        address?.substring(address?.length - 4)
                                );
                            }}
                            onMouseEnter={() => setText('Disconnect')}
                            onClick={() => {}}
                        >
                            {text}
                        </span>
                    ) : (
                        <span>CONNECT WALLET</span>
                    )}
                </span>
            </div>
        </div>
    );
}
