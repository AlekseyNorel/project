import {urls} from "@/constants/constants";
import {IMovies} from "@/models/IMovies";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDIwMGNkMzc3ZGM4YzRjOGYzNTA1Y2Q2ZWJiMGRjZSIsIm5iZiI6MTcyMzU1NDM4OS42NjI2OTgsInN1YiI6IjY2Yjc2MDJlNmY5MmI3NjcyOGFhOGU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtVxytv51IFLoe6zAWb0BEQe6zcUXBCyovxHVbYGYEw'
    }
};

export const apiService = {
    getAllMovies :async ():Promise<IMovies> => {
        const response = await fetch(urls.movies, options)
            .then(value => value.json());
        return response;
    }
}