import './output.css';
import Navbar from './containers/Navbar';
import CreateRaffle from './pages/CreateRaffle';
import Raffles from './pages/Raffles';
import Raffle from './pages/Raffle';
import Selected from './pages/Selected';
import CreateProject from './pages/CreateProject';
import RaffleStatus from './pages/RaffleStatus';
import Collection from './pages/Collection';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { StarknetConfig, InjectedConnector } from '@starknet-react/core';

const connectors = [
	new InjectedConnector({ options: { id: 'braavos' } }),
	new InjectedConnector({ options: { id: 'argentX' } }),
]

function App() {
    return (
        <StarknetConfig connectors={connectors}>
            <div className="flex flex-col mx-16 max-w-[80rem] mx-auto px-8">
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<CreateRaffle />} />
                        <Route path="/raffles" element={<Raffles />} />
                        <Route path="/raffle/:id" element={<Raffle />} />
                        <Route path="/selected" element={<Selected />} />
                        <Route path="/create" element={<CreateProject />} />
                        <Route path="/status" element={<RaffleStatus />} />
                        <Route
                            path="/collection/:id"
                            element={<Collection />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </StarknetConfig>
    );
}

export default App;
