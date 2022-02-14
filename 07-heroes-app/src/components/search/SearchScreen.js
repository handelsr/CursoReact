import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/customHooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [ values, handleInputChange ] = useForm({
        searchText: q
    });

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    const { searchText } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);


    return (
        <>
            <h1>Búsquedas</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <div className='form-group'>
                            <label>Buscar</label>
                            <input
                                type='text'
                                placeholder='Buscar un heroe'
                                className='form-control'
                                name='searchText'
                                autoComplete='off'
                                onChange={ handleInputChange }
                                value={ searchText }
                            />
                            <button
                                className='btn btn-outline-primary mt-1 btn-block' type='submit'
                            >
                                Buscar
                            </button>
                        </div>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className='alert alert-info'>Buscar un héroe</div>
                            : (heroesFiltered.length === 0) && <div className='alert alert-danger'>No hay resultados { q }</div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                { ...hero }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
