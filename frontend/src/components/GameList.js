import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../features/games/gameSlice';

const GamesList = () => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games.games);
    const gamesStatus = useSelector((state) => state.games.status);
    const error = useSelector((state) => state.games.error);

    useEffect(() => {
        if (gamesStatus === 'idle') {
            dispatch(fetchGames());
        }
    }, [gamesStatus, dispatch]);

    if (gamesStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (gamesStatus === 'failed') {
        return <div>{error}</div>;
    }

    return (
        <div>
            {games.map((game) => (
                <div key={game.id}>
                    <img src={game.imageUrl} alt={game.title} />
                    <h2>{game.title}</h2>
                    <p>${game.price}</p>
                </div>
            ))}
        </div>
    );
};

export default GamesList;
