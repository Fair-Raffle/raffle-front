import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { selectedCollections } from '../assets/texts';
export default function Raffles() {
    const [search, setSearch] = useState('');

    return (
        <div className="flex flex-col space-y-16">
            <div className="flex flex-row justify-between space-x-16">
                <div className="flex flex-col w-1/2">
                    <span className="font-bebas text-[24px]">
                        RAFFLE TOOL FOR SELECTED COLLECTIONS
                    </span>
                    <span>
                        Thanks to this specially designed system, selected
                        collections' NFT holders can participate in exclusive
                        giveaways. Enhance the value of NFT collections by
                        offering fair raffles to holders.
                    </span>
                </div>
                <div className="flex flex-col w-1/2 space-y-2">
                    <span className="font-bebas text-[24px]">
                        SEARCH A RAFFLES
                    </span>
                    <span>
                        Search a raffle via Public Address of “RaffleMaker” or
                        “Name” of the raffle.
                    </span>
                    <button className="bg-[#2B3142] text-[#6F80B0] rounded-[13px] w-1/4 text-[12px] whitespace-pre-line mb-0 mt-auto px-4 py-1">
                        <input
                            className="text-[20px] outline-0 ring-0 bg-[#2B3142] text-white w-full"
                            placeholder="_ _ _ _ _ _ _ _"
                            onChange={(e) =>
                                setSearch((prev) => {
                                    return e.target.value;
                                })
                            }
                            value={search}
                        />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-8 rounded-[2px] p-4">
                {selectedCollections
                    .filter((collection) => {
                        if (search === '') {
                            return collection;
                        } else if (
                            collection.collectionName
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            collection.collectionName
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return collection;
                        }
                    })
                    .map((collection, index) => (
                        <Link
                            to={`/collection/${index}`}
                            className="flex flex-col space-y-2"
                        >
                            <div
                                className={`flex flex-col  aspect-square shadow-step rounded-[2px] flex-row bg-step hover:shadow-step-hover w-full p-4 border-step-current hover:border-2 border-solid hover:border-[#70769d] cursor-pointer`}
                            ></div>
                            <span className="text-white font-bebas mx-auto text-[20px]">
                                {collection.collectionName}
                            </span>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
