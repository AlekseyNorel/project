import React from 'react';
import {apiService} from "@/services/api.service";
import {IMovies} from "@/models/IMovies";

const MoviesPage = async () => {
    const movies:IMovies = await apiService.getAllMovies();
    console.log(movies);
    return (
        <div>
            MoviesPage
            {movies.results.map(value=><div key={value.vote_count}>{value.title}  </div>)}
        </div>
    );
};

export default  MoviesPage;

